from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = 'Placeholder for books_authors main page.'
    return HttpResponse(response)