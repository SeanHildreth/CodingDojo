from flask import Flask, render_template, redirect, request, session, flash
import re
import datetime
from flask_bcrypt import Bcrypt
from mysqlconnection import connectToMySQL

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASS_REGEX = re.compile(r'^(?=\S{8,24}$)(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^A-Za-z\s0-9])')
NAME_REGEX = re.compile(r'^[a-zA-Z]{2,255}$')

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "1234qwer!@#$QWER"
mysql = connectToMySQL('loginregistration')


@app.route('/')
def index():
    try:
        if session['loggedin'] == True:
            return redirect('/success')
    except KeyError:
        pass
    states = {'AL':'Alabama', 'AK':'Alaska', 'AZ':'Arizona', 'AR':'Arkansas', 'CA':'California', 'CO':'Colorado', 'CT':'Connecticut', 'DE':'Delaware', 'FL':'Florida', 'GA':'Georgia', 'HI':'Hawaii', 'ID':'Idaho', 'IL':'Illinois', 'IN':'Indiana', 'IA':'Iowa', 'KS':'Kansas', 'KY':'Kentucky', 'LA':'Louisiana', 'ME':'Maine', 'MD':'Maryland', 'MA':'Massachusetts', 'MI':'Michigan', 'MN':'Minnesota', 'MS':'Mississippi', 'MO':'Missouri', 'MT':'Montana', 'NE':'Nebraska', 'NV':'Nevada', 'NH':'New Hamsphire', 'NJ':'New Jersey', 'NM':'New Mexico', 'NY':'New York', 'NC':'North Carolina', 'ND':'North Dakota', 'OH':'Ohio', 'OK':'Oklahoma', 'OR':'Oregon', 'PA':'Pennsylvania', 'RI':'Rhode Island', 'SC':'South Carolina', 'SD':'South Dakota', 'TN':'Tennessee', 'TX':'Texas', 'UT':'Utah', 'VT':'Vermont', 'VA':'Viginia', 'WA':'Washington', 'WV':'West Virginia', 'WI':'Wisconsin', 'WY':'Wyoming', 'AS':'American Samoa', 'DC':'District of Columbia', 'GU':'Guam', 'MP':'Northern Mariana Islands', 'PR':'Puerto Rico', 'VI':'Virgin Islands'}
    langs = ['C#', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift']
    keys = ['email', 'username', 'fname', 'lname', 'street', 'city', 'state', 'zip', 'bday', 'lang']
    for idx in keys:
        if idx not in session:
            session[idx] = ''

    return render_template('index.html', states = states, langs = langs)


@app.route('/process', methods=['POST'])
def process():
    keys = ['email', 'username', 'fname', 'lname', 'street', 'city', 'state', 'zip', 'bday', 'lang']
    for idx in keys:
        session[idx] = request.form[idx]
    mysql = connectToMySQL('loginregistration')
    all_users = mysql.query_db('SELECT * FROM users')
    for key in request.form:
        if request.form[key] == '':
            flash('All fields must be filled out correctly.')
            break
    if not NAME_REGEX.match(request.form['fname']):
        flash("Invalid First Name!")
    if not NAME_REGEX.match(request.form['lname']):
        flash("Invalid Last Name!")
    # need to add a validation for username length and characters
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        for email in all_users:
            if request.form['email'].lower() == email['email'].lower():
                flash('This email is already taken!')
    for username in all_users:
        if request.form['username'].lower() == username['username'].lower():
            flash('This username is already taken!')
    if request.form['bday']:
        bday = request.form['bday']
        year,month,day = bday.split('-')
        dt = datetime.datetime.now()
        today = dt.strftime('%Y-%m-%d')
        year2,month2,day2 = today.split('-')
        if int(year) > int(year2) - 13:
            flash('Must be at least 13 to register!')
        elif int(year) == int(year2) - 13:
            if int(month) > int(month2):
                flash('Must be at least 13 to register!')
            elif int(month) == int(month2):
                if int(day) > int(day2):
                    flash('Must be at least 13 to register!')
    if not PASS_REGEX.match(request.form['pass']):
        flash("Invalid Password! Must be between 8 - 24 characters, include at least one number, one Uppercase letter, one lowercase letter, and one special character.")
    else:
        if request.form['cpass'] != request.form['pass']:
            flash('Passwords must match!')
    if '_flashes' not in session:
        pw_hash = bcrypt.generate_password_hash(request.form['pass'])  
        mysql = connectToMySQL('loginregistration')
        query = "INSERT INTO users (email, username, first_name, last_name, password, birthday, fav_lang, created_at, updated_at) VALUES (%(email)s, %(username)s, %(fname)s, %(lname)s, %(pw_hash)s, %(bday)s, %(lang)s, NOW(), NOW());"
        data = {
            'email':request.form['email'],
            'username':request.form['username'],
            'fname':request.form['fname'],
            'lname':request.form['lname'],
            'pw_hash':pw_hash,
            'bday':request.form['bday'],
            'lang':request.form['lang']
                }
        new_user_id = mysql.query_db(query, data)
        mysql = connectToMySQL('loginregistration')
        query = "INSERT INTO addresses (users_id, street, city, state, zipcode, created_at, updated_at) VALUES (%(new_user_id)s, %(street)s, %(city)s, %(state)s, %(zip)s, NOW(), NOW());"
        data = {
        'new_user_id':new_user_id,
        'street':request.form['street'],
        'city':request.form['city'],
        'state':request.form['state'],
        'zip':request.form['zip']
                }
        mysql.query_db(query, data)
        session.clear()
        flash('You successfully registered your account!')
        session['username'] = request.form['username']
        session['loggedin'] = True
        return redirect('/success')
    else:
        return redirect('/')


@app.route('/login', methods=['POST'])
def login():
    for key in request.form:
        if request.form[key] == '':
            flash('All fields must be filled out correctly.')
            return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['pass'])
    mysql = connectToMySQL('loginregistration')
    query = "SELECT * FROM users WHERE username = %(username)s;"
    data = { "username" : request.form["username"] }
    result = mysql.query_db(query, data)
    if result:
        if bcrypt.check_password_hash(result[0]['password'], request.form['pass']):
            session['username'] = request.form['username']
            session['loggedin'] = True
            return redirect('/success')
    flash('Invlaid username or password!')
    return redirect('/')


@app.route('/success')
def success():
    return render_template('success.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)