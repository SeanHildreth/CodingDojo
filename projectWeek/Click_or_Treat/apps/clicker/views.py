from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from ..login.models import User
from .models import *
import random


base_hp = 20


def dashboard(request):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass

    user = User.objects.get(id=request.session['logged_id'])
    progress = Progress.objects.get(user_id=user.id)
    monster_hp = base_hp + progress.world_lvl
    monster_hp_low = round(monster_hp * .75)
    monster_hp_high = round(monster_hp * 1.25)


    context = {
        'user':user,
        'progress':progress,
        'hp':random.randrange(monster_hp_low, monster_hp_high+1),
    }





    return render(request, 'clicker/dashboard.html', context)