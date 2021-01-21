import React, { Component } from "react";
import "./Header.scss";
import {
  Form,
  Nav,
  Navbar,
  FormControl,
  NavDropdown,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as alternativeIcons from "@fortawesome/free-regular-svg-icons";
import * as icons from "@fortawesome/free-solid-svg-icons";
import SuggestionBox from "./suggestionBox";
import userEvent from "@testing-library/user-event";

class Header extends Component {
  state = {
    searchTerm: "",
    searchResult: [],
  };
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
          <div>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                onKeyPress={(event) => {
                  console.log('aa')
                  if (event.key === 'Enter'){
                    event.preventDefault()
                    this.props.history.push(`/course/search/${this.state.searchTerm}`)
                    console.log(this.props, 'props');
                  }
                }}
                value={this.state.searchTerm}
                className="search-input mr-sm-2"
                onChange={async (event) => {
                  const searchTerm = event.target.value;
                  const searchResult = await this.props.searchCourse(
                    searchTerm
                  );
                  this.setState({ searchTerm: searchTerm, searchResult });
                }}
              />
            </Form>
            <SuggestionBox suggestions={this.state.searchResult} />
          </div>
          <Link className="mx-3 d-block" to="/business">
            Udemyx for Business{" "}
          </Link>
          <Link className="mx-3 d-block" to="/teaching">
            Teach on Udemyx{" "}
          </Link>
          <Link className="mx-3 d-block" to="/mycourses/learning">
            My courses
          </Link>
          <Link className="mx-3 d-block" to="/mycourses/wishlist">
            <FontAwesomeIcon icon={alternativeIcons.faHeart} />
          </Link>
          <Link className="mx-3 d-block" to="/cart">
            <FontAwesomeIcon icon={icons.faShoppingCart} />
            <Badge variant="danger">
              {this.props.user.cart ? this.props.user.cart.length : ""}
            </Badge>
          </Link>
          <Button className="ml-2" variant="outline-success">
            Log in
          </Button>
          <Button className="ml-2" variant="success">
            Sign up
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
