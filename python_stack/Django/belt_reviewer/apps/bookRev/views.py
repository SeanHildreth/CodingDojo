from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.db.models import Count
from .models import *


def welcome(request):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    context = {
        'reviews':Review.objects.filter().order_by('-id')[:3],
        'books':Book.objects.all()
    }
    return render(request, 'bookRev/welcome.html', context)


def addform(request):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    context = {
        'authors':Author.objects.all()
    }
    return render(request, 'bookRev/addform.html', context)


def addbook(request):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    if request.method == 'POST':
        errors = Review.objects.validate(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/books/addform')
        else:
            if request.POST['newauthor'] == '':
                newbook = Book.objects.create(title=request.POST['title'], author=Author.objects.get(id=request.POST['author']))
                Review.objects.create(review=request.POST['review'], rating=request.POST['rating'], book=Book.objects.get(id=newbook.id), user=User.objects.get(id=request.session['logged_id']))
                return redirect('/books/' + str(newbook.id))
            else:
                newauthor = Author.objects.create(name=request.POST['newauthor'])
                newbook = Book.objects.create(title=request.POST['title'], author=Author.objects.get(id=newauthor.id))
                Review.objects.create(review=request.POST['review'], rating=request.POST['rating'], book=Book.objects.get(id=newbook.id), user=User.objects.get(id=request.session['logged_id']))
                return redirect('/books/' + str(newbook.id))
    return redirect('/books')


def book(request, id):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    print(id)
    context = {
        'book':Book.objects.get(id=id),
        'reviews':Review.objects.filter(book=id)
    }
    return render(request, 'bookRev/book.html', context)


def addreview(request):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    if request.method == 'POST':
        errors = Review.objects.rev_validate(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/books/' + request.post['book'])
        else:
            Review.objects.create(review=request.POST['review'], rating=request.POST['rating'], book=Book.objects.get(id=request.POST['book']), user=User.objects.get(id=request.session['logged_id']))
            return redirect('/books/' + request.POST['book'])


def users(request, id):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    context ={
        'user':User.objects.get(id=id),
        'reviewcount':Review.objects.filter(user=id).count(),
        'booksreviewed':Book.objects.filter(reviews__user__id=id).values('title', 'id').annotate(total=Count('title'))
    }
    return render(request,'bookRev/users.html', context)


def delete(request):
    try:
        if request.session['loggedin'] == False:
            return redirect('/')
    except:
        pass
    if request.method == 'POST':
        reviewtodelete = Review.objects.get(id=request.POST['review'])
        if reviewtodelete.user.id == request.session['logged_id']:
            reviewtodelete.delete()
        print(reviewtodelete)
        return redirect('/books/' + request.POST['book'])

