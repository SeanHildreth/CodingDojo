from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    print(request.form)
    if len(request.form['name']) < 1:
        # display validation error
        flash('Name cannot be empty!') # just pass a string to the flash function
    else:
        # display success message
        flash(f"Success! Your name is {request.form['name']}.") # just pass a string to the flash function
    return redirect('/') # either way the application should return to the index and display the message


if __name__=="__main__":
    app.run(debug=True)
