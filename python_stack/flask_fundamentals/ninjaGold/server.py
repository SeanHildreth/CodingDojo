from flask import Flask, render_template, request, redirect, session
import datetime
import random
app = Flask(__name__)
app.secret_key = '1sdf@#$987UJH65%^'


@app.route('/')
def index():
    if 'total' not in session:
        session['total'] = 0
        session['activities'] = ['Your starting gold is 50']
    x = session['total']
    print(x)
    y = session['activities']
    print(y)
    x +=10
    amount = '<input type="number" class="form-control" name="Amount" value="' + str(x) + '" disabled>'
    print(amount)
    return render_template('index.html', amount = amount)




@app.route('/process_money', methods=['POST'])
def process_money():
    print(request.form)
    





    return redirect('/')


if __name__ == '__main__':
    app.run(debug = True)