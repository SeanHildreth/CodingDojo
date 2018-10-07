from flask import Flask, render_template, request, redirect, session
import datetime
app = Flask(__name__)
app.secret_key = 'Secrets'

def sessionCounter():
    try:
        session['count'] += 1
    except KeyError:
        session['count'] = 1


@app.route('/')
def index():
    sessionCounter()
    return render_template('index.html', count = session['count'])

@app.route('/destroy_session')
def resetSession():
    session.clear()
    return redirect('/')

@app.route('/add2')
def add2():
    sessionCounter()
    return redirect('/')


if __name__=="__main__":   
    app.run(debug=True)