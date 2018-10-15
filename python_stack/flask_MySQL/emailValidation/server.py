from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import connectToMySQL
import datetime
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = "1234qwer!@#$QWER"


mysql = connectToMySQL('email_validation')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add', methods=['POST'])
def add():
    print(request.form)
    mysql = connectToMySQL("email_validation")
    all_emails = mysql.query_db("SELECT email, created_at AS time FROM emails;")
    if len(request.form['email']) < 1:
        flash('Email cannot be empty!')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        for email in all_emails:
            if request.form['email'].lower() == email['email'].lower():
                flash('This email is already taken!')


    if '_flashes' not in session:
        mysql = connectToMySQL("email_validation")
        query = 'INSERT INTO emails (email, created_at, updated_at) VALUES (%(email)s, NOW(), NOW());'
        data = {'email': request.form['email']}
        new_email_id = mysql.query_db(query, data)
        flash('The email address you entered: ' + request.form['email'] + ' is a VALID email address! Thank you!')
        return redirect('/success')
    else:
        return redirect('/')


@app.route('/success')
def success():
    mysql = connectToMySQL("email_validation")
    all_emails = mysql.query_db("SELECT email, created_at AS time FROM emails;")
    print(all_emails)
    for key in all_emails:
        print(key['email'])
        print(key['time'])
    return render_template('success.html', emails = all_emails)


if __name__ == "__main__":
    app.run(debug=True)