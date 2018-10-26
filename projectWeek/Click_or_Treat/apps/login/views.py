from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from ..clicker.models import Progress
from .models import *
import bcrypt


def index(request):
    try:
        if request.session['loggedin'] == True:
            return redirect('/dashboard')
    except:
        pass
    request.session['keys'] = ['email', 'username', 'fname', 'lname', 'bday']
    for idx in request.session['keys']:
        if idx not in request.session:
            request.session[idx] = ''
    return render(request, 'login/index.html')

def register(request):
    if request.method == 'POST':
        errors = User.objects.validate(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            for idx in request.session['keys']:
                request.session[idx] = request.POST[idx]
            return redirect('/')
        request.session['loggedin'] = True
        request.session['username'] = request.POST['username']
        hash_pw = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt())
        new = User.objects.create(email=request.POST['email'], username=request.POST['username'], first_name=request.POST['fname'], last_name=request.POST['lname'], bday=request.POST['bday'], password=hash_pw.decode())
        newprog = Progress.objects.create(character_lvl=1, world_lvl=1, prestige_lvl=1, total_candy=0, user_id=new.id)
        request.session['logged_id'] = new.id
        return redirect('/dashboard')
    return redirect('/')


def login(request):
    if request.method == 'POST':
        errors = User.objects.validate_login(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        request.session['loggedin'] = True
        request.session['username'] = request.POST['username']
        user = User.objects.get(username=request.POST['username'])
        request.session['logged_id'] = user.id
        return redirect('/dashboard')
    return redirect('/')


def logout(request):
    request.session.clear()
    return redirect('/')