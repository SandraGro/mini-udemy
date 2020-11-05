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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

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
            <NavDropdown title="Categories">
              {Object.keys(categories).map((category, index) => (
                <Link
                  className="dropdown-item"
                  to={`/course/category/${category}`}
                  key={`dropdown-option-${index}`}
                >
                  {category}
                </Link>
              ))}
              <Link
                className="dropdown-item"
                to={`/course/category/allcourses`}
              >
                All courses
              </Link>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="search-input mr-sm-2"
            />
          </Form>
          <Link className="mx-3 d-block" to="/business" >Udemyx for Business </Link>
          <Link className="mx-3 d-block" to="/teaching">Teach on Udemyx </Link>
          <Link className="mx-3 d-block" to="/mycourses/learning">My courses</Link>
          <Link className="mx-3 d-block" to="/mycourses/wishlist">
            <FontAwesomeIcon icon={icons.faHeart} />
          </Link>
          <Button className="ml-2" variant="outline-success">Log in</Button>
          <Button className="ml-2" variant="success">Sign up</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
