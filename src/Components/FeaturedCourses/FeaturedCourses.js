import React, { Component } from "react";
import { Nav, NavLink } from "react-bootstrap";
import Courses from "./Courses/Courses";

class FeaturedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "Business",
      featuredCourses: [],
    };
  }

  render() {
    return (
      <>
        <h4>The world's largest selection of courses</h4>
        <Nav activeKey={"link-" + this.state.activeCategory} variant="tabs">
          {Object.keys(this.props.filteredCourses).map((category, index) => {
            return (
              <Nav.Item key={`category-${index}`}>
                <NavLink className="tab-title"
                  eventKey={`link-${category}`}
                  onClick={() => this.setState({ activeCategory: category })}
                >
                  {category}
                </NavLink>
              </Nav.Item>
            );
          })}
        </Nav>
        {!Object.keys(this.props.filteredCourses).length ? (
          <p>Loading ...!</p>
        ) : (
          <Courses
            displayOverlay={true}
            featuredCourses={
              this.props.filteredCourses[this.state.activeCategory]
            }
            courses={this.props.featuredCourses}
            user={this.props.user}
            setUser={this.props.setUser}
            addCourseToWishlist={this.props.addCourseToWishlist}
            addCourseToCart={this.props.addCourseToCart}

          />
        )}
      </>
    );
  }
}
export default FeaturedCourses;
