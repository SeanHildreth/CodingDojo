from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # Set a secret key for security purposes


# Routing rules and rest of server.py below


# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")



# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
# the server is listening for a POST request to:
# localhost:5000/users
# we define the route below such that the route matches the action of our form - '/users'
# similarly we need to allow specific methods - 'POST' in this case
@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    # recall the name attributes we added to our form inputs
    # to access the data that the user input into the fields we use request.form['name_of_input']
    # Here we add two properties to session to store the name and email
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect ('/show')# Notice that we changed where we redirect to
                        # Now we go to the page that displays the name and email!


@app.route('/show')
def show_user():
  return render_template('user.html')


if __name__=="__main__":
    app.run(debug=True) 
