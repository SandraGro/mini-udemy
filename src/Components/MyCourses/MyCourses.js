import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Courses from "../FeaturedCourses/Courses/Courses";

class MyCourses extends Component {
  constructor (props) {
    super (props);
    this.state = {
      activeSection : props.activeSection,
    }
    console.log(this.state, 'state');
  }
  render() {
    return (
      <>
        <Nav activeKey={this.state.activeSection} variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="learning" onClick={() => this.setState({ activeSection: 'learning' })}>All courses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="wishlist" onClick={() => this.setState({ activeSection: 'wishlist' })}>Wishlist</Nav.Link>
          </Nav.Item>
        </Nav>
        {!Object.keys([]).length ? (
          <p>Loading ...!</p>
        ) : (
          <Courses featuredCourses={[]} />
        )}
      </>
    );
  }
}

export default MyCourses;
