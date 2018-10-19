from django.shortcuts import render, HttpResponse, redirect
from .models import *
from ..loginReg.models import *
from datetime import *


def wall(request):
    try:
        if request.session['loggedin'] == True:
            pass
    except:
        return redirect('/')
    context = {
        'msgs':Message.objects.all(),
        'cmnts':Comment.objects.all()
    }




    return render(request, 'msgwall/wall.html', context)

def message(request):
    if request.method == 'POST':
        newmsg = Message.objects.create(user_message=User.objects.get(id=request.session['logged_id']), message=request.POST['message'])
        return redirect('/wall')
    else:
        return redirect('/wall')


def comment(request):
    if request.method == 'POST':
        newcmnt = Comment.objects.create(message=Message.objects.get(id=request.POST['id']), user_comment=User.objects.get(id=request.session['logged_id']), comment=request.POST['comment'])
        return redirect('/wall')
    else:
        return redirect('/wall')


def delete(request):
    if request.method == 'POST':
        try:
            Message.objects.get(id=request.POST['msg_id']).delete()
        except:
            Comment.objects.get(id=request.POST['cmnt_id']).delete()
        return redirect('/wall')
    else:
        return redirect('/wall')