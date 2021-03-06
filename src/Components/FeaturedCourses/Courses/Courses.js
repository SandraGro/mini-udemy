import React, { Component } from "react";
import {
  Card,
  Badge,
  CardDeck,
  Overlay,
  Popover,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Courses.scss";

class Courses extends Component {
  constructor() {
    super();
    this.overlayRef = [];
    this.state = {
      show: {},
    };
  }
  render() {
    return (
      <>
        <CardDeck>
          {this.props.featuredCourses.map((course, index) => (
            <div key={`cardDeck-${index}`}>
              <Overlay
                target={this.overlayRef[`overlay-${index}`]}
                placement="right"
                show={this.state.show[`overlay-${index}`]}
              >
                <Popover
                  onMouseLeave={() => {
                    this.setState({ show: { [`overlay-${index}`]: false } });
                  }}
                  id={`tooltip-${index}`}
                >
                  <Popover.Title as="h3">{course.title}</Popover.Title>
                  {course.bestseller ? (
                    <Badge variant="warning">Bestseller</Badge>
                  ) : (
                    ""
                  )}
                  <div>{course.description}</div>
                  <Popover.Content>
                    <Button
                      className="card-button"
                      variant="outline-danger"
                      onClick={() =>
                        this.props.addCourseToCart(
                          course.slug,
                          this.props.user,
                          this.props.setUser,
                          this.props.courses
                        )
                      }
                      d-inline="true"
                    >
                      Add to cart
                    </Button>
                    <Button
                      className="mr-1 mt-2"
                      variant="outline-success"
                      onClick={() =>
                        this.props.addCourseToWishlist(
                          course.slug,
                          this.props.user,
                          this.props.setUser,
                          this.props.courses
                        )
                      }
                    >
                      <FontAwesomeIcon icon={icons.faHeart} />
                    </Button>
                  </Popover.Content>
                </Popover>
              </Overlay>
              <Card
                ref={(el) => (this.overlayRef[`overlay-${index}`] = el)}
                onMouseEnter={() => {
                  this.setState({ show: { [`overlay-${index}`]: true } });
                }}
                className="course-card"
              >
                <Link to={`/course/${course.slug}`}>
                  <Card.Img variant="top" src={course.thumbnail} />
                  <Card.Body>
                    <p className="card-deck-title">{course.title}</p>
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
            </div>
          ))}
        </CardDeck>
      </>
    );
  }
}
export default Courses;
