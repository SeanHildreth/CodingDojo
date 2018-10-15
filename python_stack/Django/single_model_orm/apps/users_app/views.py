from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = 'Placeholder for users_app index html.'
    return HttpResponse(response)
