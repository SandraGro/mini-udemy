import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./CoursesByCategory.scss";

class CoursesByCategory extends Component {

  render() {
    return (
      <>
        {this.props.categoryCourses.map((course, index) => (
          <Container className="container" key={`courseItem-${index}`}>
            <Row>
              <Col sm xs={12} md lg={2} className="margin-img">
                <Card.Img
                  variant="top"
                  src={course.thumbnail}
                  className="images"
                />
              </Col>
              <Col sm xs={12} md lg={10}>
                <Card className="card-item">
                  <Card.Header className="card-header">
                    <h5>{course.title}</h5>
                    <div className="rating-container">
                      <small>{course.author} </small>
                      <ReactStars
                        className="rating"
                        count={5}
                        onChange="5"
                        size={14}
                        activeColor="#ffd700"
                      />
                      <span> {course.rating} </span>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <footer className="blockquote-footer">
                        <cite title="Source Title">{course.description}</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </>
    );
  }
}
export default CoursesByCategory;
