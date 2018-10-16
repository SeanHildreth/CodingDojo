from django.shortcuts import render, HttpResponse, redirect
from .models import Product


def index(request):
    if 'purchased' not in request.session:
        request.session['purchased'] = 0
        request.session['amount'] = 0
    context = {
        'products':Product.objects.all()
    }
    return render(request, 'store/index.html', context)

def buy(request):
    if request.method == 'POST':
        request.session['id'] = request.POST['item']
        item = Product.objects.get(id=request.POST['item'])
        request.session['purchased'] += 1
        request.session['amount'] += item.price
        print(request.POST)
    return redirect('/store/checkout')

def checkout(request):
    context = {
        'product':Product.objects.get(id=request.session['id'])
    }
    return render(request, 'store/checkout.html', context)