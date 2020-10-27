import React, { Component } from "react";
import { Card, Col, Row, Container, Badge } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./CoursesByCategory.scss";
import { Link } from 'react-router-dom';

class CoursesByCategory extends Component {
  render() {
    return (
      <>
        {this.props.categoryCourses.map((course, index) => (
          <Container className="container" key={`courseItem-${index}`}>
            <Row>
              <Link to={`/course/${course.slug}`}>
                <Col sm xs={12} md lg={2} className="margin-img">
                  <Card.Img
                    variant="top"
                    src={course.thumbnail}
                    className="images"
                  />
                </Col>
                <Col sm xs={12} md lg={10}>
                  <div className="card-item">
                    <h5 className="card-title">{course.title}</h5>
                    <div>
                      <span className="price">${course.discountedPrice} </span>
                      <span className="price">${course.originalPrice} </span>
                    </div>
                    <div>
                      <small>{course.author} </small>
                    </div>
                    <div className="rating-container">
                      <span> {course.rating} </span>
                      <ReactStars
                        className="rating"
                        count={5}
                        onChange="5"
                        size={14}
                        activeColor="#ffd700"
                      />
                      <small>({course.reviews})</small>
                    </div>
                    <div>
                      <span title="Source Title">{course.description}</span>
                    </div>
                    {course.bestseller ? (
                      <Badge variant="warning">Bestseller</Badge>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
              </Link>
            </Row>
          </Container>
        ))}
      </>
    );
  }
}
export default CoursesByCategory;
