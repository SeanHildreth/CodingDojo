from flask import Flask, render_template, request, redirect, session
import datetime
import random
app = Flask(__name__)
app.secret_key = 'Secrets'


def randomNum():
    ranNum = random.randrange(0, 101)
    return ranNum

def guessCounter():
    try:
        session['count'] += 1
    except KeyError:
        session['count'] = 1


@app.route('/')
def index():
    session.clear()
    session['num'] = randomNum()
    num = session['num']
    print(num)
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def check():
    guess = request.form['guess']
    num = session['num']
    guessCounter()
    print(guess)
    if int(guess) < num:
        return redirect('/toolow')
    elif int(guess) > num:
        return redirect('/toohigh')
    elif int(guess) == num:
        return redirect('/justright')

@app.route('/toolow')
def toolow():
    return render_template('toolow.html')

@app.route('/toohigh')
def toohigh():
    return render_template('toohigh.html')

@app.route('/justright')
def justright():
    return render_template('justright.html')


if __name__=="__main__":
    app.run(debug=True)