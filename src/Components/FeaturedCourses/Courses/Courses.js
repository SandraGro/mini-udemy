import React, { Component } from "react";
import {
  Card,
  Badge,
  CardDeck,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Courses.scss";

class Courses extends Component {
  render() {
    return (
      <>
        <CardDeck>
          {this.props.featuredCourses.map((course, index) => (
            <OverlayTrigger
              key={`cardDeck-${index}`}
              placement="right"
              overlay={
                <Popover id={`tooltip-${index}`}>
                <Popover.Title as="h3">Popover bottom</Popover.Title>
                <Popover.Content>
                  <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
              </Popover>
              }
            >
              <Card className="course-card">
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
            </OverlayTrigger>
          ))}
        </CardDeck>
      </>
    );
  }
}
export default Courses;
