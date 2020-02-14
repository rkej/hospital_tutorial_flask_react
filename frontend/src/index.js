import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import addPatients from './addPatients';
import deletePatients from './deletePatients'
const routing = (<Router>
    <div>
    <Route path="/" exact = {true} component={App}/>
    <Route path="/addPatients" exact = {true} component={addPatients}/>
    <Route path="/deletePatients" exact = {true} component={deletePatients}/>
    </div>
</Router>)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
