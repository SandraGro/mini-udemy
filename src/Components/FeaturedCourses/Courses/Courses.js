import React, { Component } from "react";
import { Card, Badge, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Courses.scss";

class Courses extends Component {
  render() {
    return (
      <>
        <CardDeck>
          {this.props.featuredCourses.map((course, index) => (
            <Card className="course-card" key={`cardDeck-${index}`}>
              <Link to={`/course/${course.slug}`}>
                <Card.Img variant="top" src={course.thumbnail} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.author}</Card.Text>
                  <span>${course.discountedPrice} </span>
                  <span>${course.originalPrice}</span>
                  {course.bestseller ? (
                    <Badge variant="warning">Bestseller</Badge>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Link>
            </Card>
          ))}
        </CardDeck>
      </>
    );
  }
}
export default Courses;
