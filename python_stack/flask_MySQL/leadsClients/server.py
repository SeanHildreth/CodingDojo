from flask import Flask, render_template, redirect, request, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "1234qwer!@#$QWER"


mysql = connectToMySQL('lead_gen_business')


@app.route('/')
def index():
    mysql = connectToMySQL("lead_gen_business")
    try:
        datefrom = session['from']
        dateto = session['to']
    except KeyError:
        pass
    if 'redirect' not in session:
        all_clients = mysql.query_db("SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) AS leads FROM clients JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id GROUP BY clients.client_id;")
    else:
        all_clients = mysql.query_db("SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) AS leads FROM clients JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id WHERE leads.registered_datetime BETWEEN '" + datefrom + "' AND '" + dateto + "' GROUP BY clients.client_id;")
        session.pop('redirect', None)




    return render_template('index.html', clients = all_clients)


@app.route('/dates', methods=['POST'])
def create():
    session['from'] = request.form['from']
    session['to'] = request.form['to']
    print('*'*50)
    session['redirect'] = True
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)