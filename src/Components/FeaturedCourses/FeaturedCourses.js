import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Courses from './Courses/Courses';

class FeaturedCourses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeCategory: 'Business',
      featuredCourses:[...props.featuredCourses],
      }
  }
  sortByCategory (courses) {
    let coursesByCategory = {};
    for (let course of courses){
      if(coursesByCategory[course.category] === undefined){
        coursesByCategory[course.category] = [];
      }
      coursesByCategory[course.category].push(course);
    }
    return coursesByCategory;
  }
  render() {
    const filteredCourses = this.sortByCategory(this.state.featuredCourses);
    return (
      <>
        <h4>The world's largest selection of courses</h4>
        <Nav activeKey={"link-" + this.state.activeCategory} variant="tabs">
          {Object.keys(filteredCourses).map((category, index) =>
          {
            return (
            <Nav.Item key={`category-${index}`}>
              <Nav.Link eventKey={`link-${category}`} onClick={()=> this.setState({activeCategory: category })}>{category}</Nav.Link>
            </Nav.Item>
          )})}
        </Nav>
        <Courses featuredCourses = {filteredCourses[this.state.activeCategory]}/>
      </>
    );
  }
}
export default FeaturedCourses;
