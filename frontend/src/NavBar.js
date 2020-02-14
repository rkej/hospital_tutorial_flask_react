import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    DropdownItem, 
    DropdownToggle, 
    UncontrolledDropdown, 
    DropdownMenu,
    Badge,
    NavLink } from 'reactstrap';
    

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false, 
        };
      }
      toggle(props) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return <div> <Navbar style = {{backgroundColor: "#7F3F98"}} dark expand ="md">
            <NavbarBrand href = "/">Hospital Patient Portal</NavbarBrand>
            
            <Collapse isOpen={this.state.isOpen} navbar>

                <Nav className = "ml-auto" navbar>
                <NavbarToggler onClick={this.toggle}/>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style = {{color: "white", marginBottom: "-10%", marginLeft: "-17px"}}  nav caret >
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href = "/addPatients">
                  Add
                </DropdownItem>
                <DropdownItem href = '/deletePatients'>
                    Delete
                </DropdownItem>
                </DropdownMenu></UncontrolledDropdown>
                    
                </Nav> 
            </Collapse>
                 </Navbar>
            </div>
    }
}