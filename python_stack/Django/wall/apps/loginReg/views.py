from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from pygeocoder import Geocoder
from .models import *
import bcrypt


def index(request):
    try:
        if request.session['loggedin'] == True:
            return redirect('/wall')
    except:
        pass
    keys = ['email', 'username', 'fname', 'lname', 'street', 'apt', 'city', 'state', 'zip', 'bday', 'lang']
    for idx in keys:
        if idx not in request.session:
            request.session[idx] = ''
    context = {
        'states':{'AL':'Alabama', 'AK':'Alaska', 'AZ':'Arizona', 'AR':'Arkansas', 'CA':'California', 'CO':'Colorado', 'CT':'Connecticut', 'DE':'Delaware', 'FL':'Florida', 'GA':'Georgia', 'HI':'Hawaii', 'ID':'Idaho', 'IL':'Illinois', 'IN':'Indiana', 'IA':'Iowa', 'KS':'Kansas', 'KY':'Kentucky', 'LA':'Louisiana', 'ME':'Maine', 'MD':'Maryland', 'MA':'Massachusetts', 'MI':'Michigan', 'MN':'Minnesota', 'MS':'Mississippi', 'MO':'Missouri', 'MT':'Montana', 'NE':'Nebraska', 'NV':'Nevada', 'NH':'New Hamsphire', 'NJ':'New Jersey', 'NM':'New Mexico', 'NY':'New York', 'NC':'North Carolina', 'ND':'North Dakota', 'OH':'Ohio', 'OK':'Oklahoma', 'OR':'Oregon', 'PA':'Pennsylvania', 'RI':'Rhode Island', 'SC':'South Carolina', 'SD':'South Dakota', 'TN':'Tennessee', 'TX':'Texas', 'UT':'Utah', 'VT':'Vermont', 'VA':'Viginia', 'WA':'Washington', 'WV':'West Virginia', 'WI':'Wisconsin', 'WY':'Wyoming', 'AS':'American Samoa', 'DC':'District of Columbia', 'GU':'Guam', 'MP':'Northern Mariana Islands', 'PR':'Puerto Rico', 'VI':'Virgin Islands'},
        'langs':['C#', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift']
    }
    return render(request, 'loginReg/index.html', context)

def register(request):
    if request.method == 'POST':
        errors = User.objects.validate(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            request.session['remember'] = request.POST
            return redirect('/')
        else:
            try:
                del request.session['remember']
            except:
                pass
            request.session['loggedin'] = True
            request.session['username'] = request.POST['username']
            hash_pw = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt())
            new = User.objects.create(email=request.POST['email'], username=request.POST['username'], first_name=request.POST['fname'], last_name=request.POST['lname'], fav_lang=request.POST['lang'], password=hash_pw.decode())
            Address.objects.create(user=new, street=request.POST['street'], apt=request.POST['apt'], city=request.POST['city'], state=request.POST['state'], zip=request.POST['zip'])
            request.session['message'] = 'You have successfully registered a new account!'
            request.session['logged_id'] = new.id
            return redirect('/wall')
    else:
        return redirect('/')


def login(request):
    if request.method == 'POST':
        errors = User.objects.validate_login(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
                request.session['loggedin'] = True
                request.session['username'] = request.POST['username']
                user = User.objects.get(username=request.POST['username'])
                request.session['logged_id'] = user.id
                request.session['message'] = 'You have successfully logged in!'
                return redirect('/wall')
    else:
        return redirect('/')


def logout(request):
    request.session.clear()
    return redirect('/')