from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *
import bcrypt


def index(request):
    try:
        if request.session['loggedin'] == True:
            return redirect('/books')
    except:
        keys = ['email', 'username', 'fname', 'lname', 'bday']
        for idx in keys:
            if idx not in request.session:
                request.session[idx] = ''
        return render(request, 'loginReg/index.html')


def register(request):
    try:
        if request.session['loggedin'] == True:
            return redirect('/books')
    except:
        if request.method == 'POST':
            errors = User.objects.validate(request.POST)
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                keys = ['email', 'username', 'fname', 'lname', 'bday']
                for idx in keys:
                    request.session[idx] = request.POST[idx]
                return redirect('/')
            else:
                request.session.clear()
                request.session['loggedin'] = True
                request.session['username'] = request.POST['username']
                hash_pw = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt())
                new = User.objects.create(email=request.POST['email'], username=request.POST['username'], first_name=request.POST['fname'], last_name=request.POST['lname'], password=hash_pw.decode())
                request.session['message'] = 'You have successfully registered a new account!'
                request.session['logged_id'] = new.id
                return redirect('/books')
        else:
            return redirect('/')


def login(request):
    try:
        if request.session['loggedin'] == True:
            return redirect('/books')
    except:
        if request.method == 'POST':
            errors = User.objects.validate_login(request.POST)
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                return redirect('/')
            else:
                    request.session['loggedin'] = True
                    user = User.objects.get(email=request.POST['email'])
                    request.session['username'] = user.username
                    request.session['logged_id'] = user.id
                    return redirect('/books')
        else:
            return redirect('/')


def logout(request):
    request.session.clear()
    return redirect('/')