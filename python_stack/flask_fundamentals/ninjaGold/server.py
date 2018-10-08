from flask import Flask, render_template, request, redirect, session
import datetime
import random
app = Flask(__name__)
app.secret_key = '1sdf@#$987UJH65%^'


@app.route('/')
def index():
    if 'total' not in session:
        session['total'] = 50
        session['activities'] = ['<p class="text-dark d-block">Your starting gold is 50</p>']
    x = session['total']
    print('*'*50)
    print(x)
    y = session['activities']
    print('*'*50)
    print(y)
    amount = '<input type="number" class="form-control" name="Amount" value="' + str(x) + '" disabled>'
    print('*'*50)
    return render_template('index.html', amount = amount, act = y)




@app.route('/process_money', methods=['POST'])
def process_money():
    print('*'*50)
    a = request.form['place']
    print(a)
    dt = datetime.datetime.now()
    gettime = dt.strftime("%Y-%m-%d %I:%M%p")
    if a == 'farm':
        b = random.randrange(10, 21)
        c = '<p class="text-success d-block">You earned ' + str(b) + ' gold working on the farm! (' + gettime + ')</p>'
    elif a == 'cave':
        b = random.randrange(5, 11)
        c = '<p class="text-success d-block">You earned ' + str(b) + ' gold digging in the cave! (' + gettime + ')</p>'
    elif a == 'house':
        b = random.randrange(2, 6)
        c = '<p class="text-success d-block">You earned ' + str(b) + ' gold working around the house! (' + gettime + ')</p>'
    elif a == 'casino':
        b = random.randrange(-50, 51)
        if b >= 0:
            c = '<p class="text-success d-block">You earned ' + str(b) + ' gold playing in the casino! (' + gettime + ')</p>'
        elif b < 0:
            c = '<p class="text-danger d-block">You lost ' + str(b) + ' gold playing in t he casino! Ouch! (' + gettime + ')</p>'
    print('*'*50)
    print(b)
    print('*'*50)
    print(c)
    session['total'] += b
    session['activities'].append(c)
    return redirect('/')


@app.route('/reset', methods=['POST'])
def reset():
    print('*'*50)
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug = True)