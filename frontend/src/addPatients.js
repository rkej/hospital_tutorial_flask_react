import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardBody,
     Form, FormGroup, Label, Input, Row, Col, Table} from 'reactstrap';
import NavBar from './NavBar';
import axios from 'axios';

export default class addPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            LastName: '',
            Patients: [],
            error: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount(props){
        axios.get('http://127.0.0.1:5000/api/addPatient')
        .then(response => response.data)
        .then(json => this.setState({Patients: json}))
    }
   
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = event => {
        event.preventDefault();
        if((this.state.Name=='')|(this.state.LastName=='')){
            alert('Please check your input fields');
        }
        else{
        axios.post('http://127.0.0.1:5000/api/addPatient', null, {
            params: {
                Name: this.state.Name,
                LastName: this.state.LastName,
            }
        })
        .then(response => response.data)
        .then(json => this.setState({Patients: json}))
    }
    
}

    render() {
        var patients = this.state.Patients
        var patientRows = patients.map(function(patients){
            return (<tr>
              <td>{patients[0]}</td>
              <td>{patients[2]}</td>
              <td>{patients[1]}</td>
            </tr>
            )
          })
        return <div><NavBar />
            <Row>
                <Col sm="6">
            <Card style={{
                verticalAlign: 'center',
                margin: '10px',
                padding: 5,
                display: 'block',
                horizontalAlign: 'center'
            }}>
                <CardHeader style={{ backgroundColor: '#6495ED', color: 'white'}}><strong>Add Patient</strong></CardHeader>

                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="email">First Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="string" name="Name" id="Name" value={this.state.Name} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Last Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="string" name="LastName" id="LastName" value={this.state.LastName} required />
                        </FormGroup>
                        <Button style={{
                        verticalAlign: 'center',
                        margin: 'auto',
                        padding: 10,
                        display: 'block',
                        horizontalAlign: 'center',
                        width: "12.5%"
                    }} color = "success" type="submit" onClick={this.onFormSubmit}>Add</Button>
                    </Form>
                </CardBody>
            </Card>
            </Col>
            <Col sm = "6">
            <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                
            }}>

                <CardHeader style={{ backgroundColor: '#6495ED', color: 'white'}}><strong>Patient Records</strong></CardHeader>
                <CardBody>
                <Table style = {{marginBottom: "-5%"}}>
      <thead>
        <tr>
          <th >PID</th>
          <th>First name</th>
          <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
              {patientRows}
            </tbody>
            <br/>
            </Table>
            </CardBody>
            </Card>
            </Col>
            </Row>
        </div >
    }
}
