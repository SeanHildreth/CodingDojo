from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = 'Placeholder for likes_books main page.'
    return HttpResponse(response)