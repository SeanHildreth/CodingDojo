from flask import Flask, render_template, request, redirect
import datetime
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)


    s = request.form['strawberry']
    r = request.form['raspberry']
    a = request.form['apple']
    fn = request.form['first_name']
    ln = request.form['last_name']
    sid = request.form['student_id']
    dt = datetime.datetime.now()
    gettime = dt.strftime("%Y-%m-%d %H:%M")

    return render_template("checkout.html", straw = int(s), rasp = int(r), apple = int(a), first = fn, last = ln, stuid = sid, datetime = gettime)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)