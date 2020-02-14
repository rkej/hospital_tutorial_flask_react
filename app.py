from flask import Flask, request
import flask
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
from flask import jsonify

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'madona426'
app.config['MYSQL_DB'] = 'hospital_tutorial_db'
mysql = MySQL(app)


@app.route('/api/addPatient', methods=["GET", "POST"])
@cross_origin()
def add_patients():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        firstname = request.args.get('Name')
        lastname = request.args.get('LastName')
        cur.execute('INSERT INTO hospital_tutorial_db.patients(lastname, firstname) VALUES (%s, %s)',
                    (lastname, firstname))
        mysql.connection.commit()
        cur.close()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hospital_tutorial_db.patients")
        res = cur.fetchall()
    else:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hospital_tutorial_db.patients")
        res = cur.fetchall()
    return jsonify(res)


@app.route('/api/deletePatient', methods=["GET", "POST"])
@cross_origin()
def delete_patients():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        firstname = request.args.get('Name')
        lastname = request.args.get('LastName')
        cur.execute('DELETE FROM hospital_tutorial_db.patients WHERE lastname = %s AND firstname = %s',
                    (lastname, firstname))
        mysql.connection.commit()
        cur.close()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hospital_tutorial_db.patients")
        res = cur.fetchall()
    else:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hospital_tutorial_db.patients")
        res = cur.fetchall()
    return jsonify(res)


if __name__ == '__main__':
    app.run()
