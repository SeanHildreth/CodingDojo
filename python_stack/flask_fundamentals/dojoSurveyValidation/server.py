from flask import Flask, render_template, request, redirect, session, flash


app = Flask(__name__)
app.secret_key = "1234qwer!@#$QWER"

@app.route('/', methods=['GET'])
def index():
    if 'name' not in session:
        session['name'] = ''
    if 'dojo' not in session:
        session['dojo'] = 'Berkeley, CA'
    if 'favlang' not in session:
        session['favlang'] = 'C#'
    if 'comment' not in session:
        session['comment'] = ''
    name = session['name']
    dojo = session['dojo']
    favlang = session['favlang']
    comment = session['comment']
    return render_template('index.html', name = name, dojo = dojo, favlang = favlang, comment = comment)


@app.route('/process', methods=['POST'])
def process():
    print(request.form)
    if len(request.form['name']) < 1:
        flash('Name cannot be empty!')
    if len(request.form['comment']) < 1:
        flash('You must provide a comment!')
    if len(request.form['comment']) > 121:
        flash('Comment must be 120 characters or less!')
    session['name'] = request.form['name']
    session['dojo'] = request.form['dojo']
    session['favlang'] = request.form['favlang']
    session['comment'] = request.form['comment']
    if '_flashes' not in session:
        return redirect('/result')
    else:
        return redirect('/')


@app.route('/result')
def result():
    name = session['name']
    dojo = session['dojo']
    favlang = session['favlang']
    comment = session['comment']
    return render_template('result.html', name = name, dojo = dojo, favlang = favlang, comment = comment)


@app.route('/danger')
def danger():
    print('A user tried to visit /danger. We have redirected the user to /')
    return redirect('/')


if __name__ == '__main__':
    app.run(debug = True)