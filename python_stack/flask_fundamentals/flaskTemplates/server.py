from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    student_info = (
        {'name' : 'Michael', 'age' : 35},
        {'name' : 'John', 'age' : 30 },
        {'name' : 'Mark', 'age' : 25},
        {'name' : 'KB', 'age' : 27}
    );
    return render_template('index.html', phrase = 'Hello', times = 5, random_numbers = [3,1,5,7,4], students = student_info)


if __name__ == '__main__':
    app.run(debug = True)