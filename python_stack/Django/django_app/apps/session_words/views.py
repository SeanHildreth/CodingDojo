from django.shortcuts import render, HttpResponse, redirect
from time import strftime

def index(request):
    return render(request, 'session_words/index.html')

def add(request):
    if 'words' not in request.session:
        request.session['words'] = []
    if request.method == "POST":
        listdict = request.session['words']
        if request.POST['word'] == '':
            return redirect('/session_words/')
        temp = request.POST
        adict = {}
        for idx in temp:
            if idx == 'csrfmiddlewaretoken':
                continue
            else:
                x = temp[idx]
                adict[idx] = x
        adict['datetime'] = strftime('%b %d, %Y %I:%M %p')
        listdict.insert(0, adict)
        request.session['words'] = listdict
        print('SUCCESS')
        return redirect('/session_words/')
    else:
        print('FAIL')
        return redirect('/session_words/')


def clear(request):
    request.session.clear()
    return redirect('/session_words/')