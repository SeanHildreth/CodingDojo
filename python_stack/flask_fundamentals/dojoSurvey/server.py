from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/result', methods = ['POST'])
def result():
    print('Got Post Info:')
    print(request.form)

    name = request.form['name']
    dojo = request.form['dojo']
    favlang = request.form['favlang']
    comment = request.form['comment']
    return render_template('result.html', name = name, dojo = dojo, favlang = favlang, comment = comment)


@app.route('/danger')
def danger():
    print('A user tried to visit /danger. We have redirected the user to /')
    return redirect('/')


if __name__ == '__main__':
    app.run(debug = True)