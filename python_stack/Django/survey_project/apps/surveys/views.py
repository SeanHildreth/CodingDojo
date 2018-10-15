from django.shortcuts import render, HttpResponse, redirect


def index(request):
    keys = ['name', 'lang', 'location', 'comment']
    for idx in keys:
        if idx not in request.session:
            request.session[idx] = ''
    langs = ['C#', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift']
    locations = ["Berkeley, CA", "Boise, ID", "Chicago, IL", "Dallas, TX", "Los Angeles, CA", "Seattle, WA", "Silicon Valley, CA", "Tulsa, OK", "Tyson's Corner, VA", "Online"]
    context = {
        'langs':langs,
        'locations':locations,
    }
    return render(request, 'surveys/index.html', context)

def submit(request):
    if request.method == "POST":
        error = False
        keys = ['name', 'lang', 'location', 'comment']
        for idx in keys:
            request.session[idx] = request.POST[idx]
        for key in keys:
            if request.session[key] == '':
                error = True
        if error:
            print(error)
            return redirect('/')
        if 'count' not in request.session:
            request.session['count'] = 1
        else:
            request.session['count'] += 1
        return redirect('/posted')
    else:
        return redirect('/')

def posted(request):
    return render(request, 'surveys/result.html')

def reset(request):
    keys = ['name', 'lang', 'location', 'comment']
    for idx in keys:
        request.session[idx] = ''
    return redirect('/')