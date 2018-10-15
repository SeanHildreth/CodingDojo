from django.shortcuts import render, HttpResponse, redirect
import datetime
import random


def index(request):
    if 'total' not in request.session:
        request.session['total'] = 0
        request.session['activities'] = ['<p class=" d-block">Your starting gold is 0</p>']
    x = request.session['total']
    activities = request.session['activities']
    amount = str(x)
    context = {
        'amount':amount,
        'activities':activities
    }
    return render(request, 'ninja_gold/index.html', context)

def process_money(request):
    if request.method == "POST":
        a = request.POST['place']
        dt = datetime.datetime.now()
        gettime = dt.strftime("%Y-%m-%d %I:%M%p")
        if a == 'farm':
            b = random.randrange(10, 21)
            c = '<p class="text-success d-block">You earned ' + str(b) + ' gold working on the farm! (' + gettime + ')</p>'
        elif a == 'cave':
            b = random.randrange(5, 11)
            c = '<p class="text-success d-block">You earned ' + str(b) + ' gold digging in the cave! (' + gettime + ')</p>'
        elif a == 'house':
            b = random.randrange(2, 6)
            c = '<p class="text-success d-block">You earned ' + str(b) + ' gold working around the house! (' + gettime + ')</p>'
        elif a == 'casino':
            b = random.randrange(-50, 51)
            if b >= 0:
                c = '<p class="text-success d-block">You earned ' + str(b) + ' gold playing in the casino! (' + gettime + ')</p>'
            elif b < 0:
                c = '<p class="text-danger d-block">You lost ' + str(b) + ' gold playing in t he casino! Ouch! (' + gettime + ')</p>'
        request.session['total'] += b
        request.session['activities'].append(c)
        return redirect('/ninja_gold/')
    else:
        return redirect('/ninja_gold/')

def reset(request):
    request.session.clear()
    return redirect ('/ninja_gold/')