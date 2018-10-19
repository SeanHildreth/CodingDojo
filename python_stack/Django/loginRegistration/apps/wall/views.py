from django.shortcuts import render, HttpResponse, redirect
from .models import *
from ..loginReg.models import *


def wall(request):
    try:
        if request.session['loggedin'] == True:
            pass
    except:
        return redirect('/')
    return render(request, 'wall/wall.html')

def message(request):
    return HttpResponse('Hello')

def comment(request):
    return HttpResponse('Goodbye')