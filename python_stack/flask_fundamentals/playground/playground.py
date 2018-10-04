from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def index():
    return render_template('index.html', amount = 3)

@app.route('/play/<x>')
def play(x):
    return render_template('index.html', amount = int(x))

@app.route('/play/<x>/<color>')
def color(x, color):
    return render_template('index.html', amount = int(x), bg_color = color)

if __name__ == '__main__':
    app.run(debug = True)