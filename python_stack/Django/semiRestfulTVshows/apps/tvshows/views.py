from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Show
from datetime import datetime


def index(request):
    context = {
        'all_shows' : Show.objects.all()
    }
    return render(request, 'tvshows/index.html', context)


def new(request):
    return render(request, 'tvshows/new.html')


def create(request):
    if request.method == 'POST':
        errors = Show.objects.basic_validation(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            request.session['show'] = request.POST
            return redirect('/shows/new')
        else:
            request.session.clear()
            new = Show.objects.create(title=request.POST['title'], network=request.POST['network'], release_date=request.POST['release_date'], desc=request.POST['desc'])
            return redirect('/shows/' + str(new.id))
    else:
        return redirect('/shows/')


def show(request, id):
    context = {
        'this_show':Show.objects.get(id=id)
    }
    return render(request, 'tvshows/show.html', context)


def edit(request, id):
    context = {
        'this_show':Show.objects.get(id=id)
    }
    return render(request, 'tvshows/edit.html', context)


def update(request, id):
    if request.method == 'POST':
        errors = Show.objects.basic_validation(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/shows/' + str(id) + '/edit')
        else:
            this_show = Show.objects.get(id=id)
            this_show.title=request.POST['title']
            this_show.network=request.POST['network']
            this_show.release_date=request.POST['release_date']
            this_show.desc=request.POST['desc']
            this_show.save()
            return redirect('/shows/' + str(this_show.id))
    else:
        return redirect('/shows/')


def destroy(request, id):
    this_show = Show.objects.get(id=id)
    this_show.delete()
    return redirect('/shows/')