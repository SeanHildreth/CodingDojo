from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string


def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0
        request.session['rand'] = 'Generate Key'
    context = {
        'count':request.session['count'],
        'rand':request.session['rand'],
    }
    return render(request, 'random_word/index.html', context)

def generate(request):
    unique_id = get_random_string(length=32)
    request.session['count'] += 1
    request.session['rand'] = unique_id
    return redirect('/random_word')

def reset(request):
    request.session.clear()
    return redirect('/random_word')