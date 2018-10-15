from django.shortcuts import render, HttpResponse, redirect
from time import strftime

def index(request):
    context = {
        'day': strftime('%b %d, %Y'),
        'time': strftime('%I:%M %p')
    }
    return render(request,'time_display/index.html', context)
