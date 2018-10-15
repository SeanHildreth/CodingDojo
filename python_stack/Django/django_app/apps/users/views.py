from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = 'Placeholder to later display a list of all the users.'
    return HttpResponse(response)


def register(request):
    response = 'Placeholder for users to create a new user record.'
    return HttpResponse(response)


def login(request):
    response = 'Placeholder for users to login.'
    return HttpResponse(response)