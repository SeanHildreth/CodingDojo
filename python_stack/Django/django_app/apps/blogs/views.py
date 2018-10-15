from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = 'Placeholder to later display a list of all blogs.'
    return HttpResponse(response)

def new(request):
    response = 'Placeholder to later display a new form to create a new blog.'
    return HttpResponse(response)

def create(request):
    return redirect('/blogs')

def show(request, number):
    print(number)
    response = "Placeholder to display blog " + number + '.'
    return HttpResponse(response)

def edit(request, number):
    response = "Placeholder to edit blog " + number + '.'
    return HttpResponse(response)

def destroy(request, number):
    return redirect('/blogs')