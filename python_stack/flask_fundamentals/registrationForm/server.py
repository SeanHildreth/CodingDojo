from flask import Flask, render_template, request, redirect, session, flash
import re
import datetime

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

PASS_REGEX = re.compile('^(?=\S{8,24}$)(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^A-Za-z\s0-9])')

app = Flask(__name__)
app.secret_key = "1234qwer!@#$QWER"

@app.route('/', methods=['GET'])
def index():
    if 'email' not in session:
        session['email'] = ''
    if 'fname' not in session:
        session['fname'] = ''
    if 'lname' not in session:
        session['lname'] = ''
    if 'bday' not in session:
        session['bday'] = ''
    email = session['email']
    fname = session['fname']
    lname = session['lname']
    bday = session['bday']
    if '_flashes' not in session:
        flash('Thanks for submitting your information.')
    return render_template('index.html',email = email, fname = fname, lname = lname, bday = bday)


@app.route('/process', methods=['POST'])
def process():

    print(request.form)
    if len(request.form['email']) < 1:
        flash('Email cannot be empty!')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    if len(request.form['fname']) < 1:
        flash('First Name cannot be empty!')
    if len(request.form['lname']) < 1:
        flash('Last Name cannot be empty!')
    if not PASS_REGEX.match(request.form['pass']):
        flash("Invalid Password!")
        flash('Password must be 8 - 24 characters long!')
        flash('Password must include at least one number!')
        flash('Password must include at least one Uppercase and  Lowercase letter!')
        flash('Password must include at least one special character!')
    if request.form['cpass'] != request.form['pass']:
        flash('Passwords must match!')
    bday = request.form['bday']
    year,month,day = bday.split('-')
    dt = datetime.datetime.now()
    today = dt.strftime('%Y-%m-%d')
    year2,month2,day2 = today.split('-')
    if int(year) > int(year2):
        flash('Birthday must be in the past!')
    elif int(year) == int(year2):
        if int(month) > int(month2):
            flash('Birthday must be in the past!')
        elif int(month) == int(month2):
            if int(day) >= int(day2):
                flash('Birthday must be in the past!')

    session['email'] = request.form['email']
    session['fname'] = request.form['fname']
    session['lname'] = request.form['lname']
    session['bday'] = request.form['bday']

    if '_flashes' not in session:
        session.clear()
        return redirect('/')
    else:
        return redirect('/')




if __name__ == '__main__':
    app.run(debug = True)