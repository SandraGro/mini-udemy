import React, { Component } from "react";
import "./Header.scss";
import {
  Form,
  Nav,
  Navbar,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    // const categories2 = [];
    // for (let i in this.props.featuredCourses) {
    //   const categoriesDuplicated = categories.filter(
    //     (category) => category === this.props.featuredCourses[i].category
    //   );
    //   if (!(categoriesDuplicated.length > 0)) {
    //     categories2.push(this.props.featuredCourses[i].category);
    //   }
    // }
    const categories = {};
    for (let course of this.props.featuredCourses) {
      categories[course.category] = true;
    }

    return (
      <Navbar bg="light" expand="lg" className="main-navbar navbar">
        <Navbar.Brand href="/">Udemyx</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              {Object.keys(categories).map((category, index) => (
                <Link
                  className="dropdown-item"
                  to={`/course/category/${category}`}
                  key={`dropdown-option-${index}`}
                >
                  {category}
                </Link>
              ))}
              <NavDropdown.Item href="#action/3.4">
                All courses
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="input-search mr-sm-2"
            />
          </Form>
          <Nav.Link href="#home">Udemyx for Business </Nav.Link>
          <Nav.Link href="#home">Teach on Udemyx </Nav.Link>
          <Nav.Link href="#link">My courses</Nav.Link>
          <Link to="/mycourses/wishlist"> {"<3"}</Link>
          <Button variant="outline-success">Log in</Button>
          <Button variant="success">Sign up</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
