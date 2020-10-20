import React, { Component } from "react";
import './Header.scss'
import { Form, Nav, Navbar, FormControl, NavDropdown, Button } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg" className="main-navbar navbar">
        <Navbar.Brand href="/">Udemyx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end mr-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Design</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">All courses</NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="input-search mr-sm-2" />
            </Form>
            <Nav.Link href="#home">Udemyx for Business </Nav.Link>
            <Nav.Link href="#home">Teach on Udemyx </Nav.Link>
            <Nav.Link href="#link">My courses</Nav.Link>
            <Button variant="outline-success">Log in</Button>
            <Button variant="success">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;