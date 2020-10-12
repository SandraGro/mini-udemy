import React, { Component } from "react";
import { Card, Badge, CardDeck } from "react-bootstrap";
import "./Courses.scss";

class Courses extends Component {
  super(props) {}

  render() {
    return (
      <>
        <CardDeck>
          {this.props.featuredCourses.map((course) => (
            <Card>
              <Card.Img variant="top" src={course.thumbnail} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.author}</Card.Text>
                <span>{course.discountedPrice}</span>
                <span>{course.originalPrice}</span>
                {course.bestseller ? (
                  <Badge variant="warning">Bestseller</Badge>
                ) : (
                  ""
                )}
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </>
    );
  }
}
export default Courses;
