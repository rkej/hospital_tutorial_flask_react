import React, { Component } from 'react';
import NavBar from './NavBar';
import { Jumbotron, Button } from 'reactstrap';
class App extends Component {

  render() {
    
    ;
    return  <div>
        <NavBar />
        <div>
          <Jumbotron>
            <h1 className="display-3">Welcome, personnel!</h1>
            <p className="lead">This is a portal which is used to maintain patient names. </p>
            <hr className="my-2" />
            <p>Use the dropdown menu on the top right to navigate to Add or Delete Patients. </p>
            <p className="lead">
              Note that you're handling very sensitive information, please be very careful. 
            </p>
          </Jumbotron>
        </div>


    </div>
    
  }
}
export default App;