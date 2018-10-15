from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = 'Placeholder for apps index page.'
    return HttpResponse(response)