# Hospital Patient Portal

## How to use this project?
Please note that this documentation assumes that you have pip, mysql, npm setup and are using PyCharm as your IDE. 
1. Clone/download the zip file and extract all into a folder. 
2. Navigate to the root folder of the project. 

### Database Setup
1. Open your terminal and run `mysql -u <username>` and enter your password on the prompt. 
2. Execute `CREATE DATABASE hospital_tutorial_db`
3. Execute `CREATE TABLE hospital_tutorial_db.Patients (pid int NOT NULL AUTO_INCREMENT, lastname varchar(255) NOT NULL, firstname varchar(255), PRIMARY KEY (pid));`
4. Please change the config in app.py in the root directory to your MySQL username and password to connect to the MySQL database. 

### Flask setup
1. Open a terminal in the root directory of the project. 
2. Execute: `python3 -m venv env` or just open the project in PyCharm and it should automatically configure this. 
3. `pip install flask`
4. `pip install flask-cors`
5. `pip install flask-mysqldb`
6. Run the project on the server. (Important) Server should be running on https://localhost:5000/

### React setup

1. Go to the frontend directory from the root directory and open a terminal. 
2. Execute: `npm install` to install all the libraries I have used. 
3. Execute: `npm start` to start the server
4. You should see the client-side server running on https://localhost:3000

The project should be running. The transactions are handled by https://localhost:5000, while the client side server is handled by https://localhost:3000. 
<br/>There are instructions on how to use the website on the home page. Enjoy!

#### Tasks Completed
Task 1, Task 2, Task 3, Task 4