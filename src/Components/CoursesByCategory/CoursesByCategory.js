import React, { Component } from "react";
import { Card, Container, Badge } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./CoursesByCategory.scss";
import { Link } from 'react-router-dom';

class CoursesByCategory extends Component {
  render() {
    return (
      <>
        {this.props.categoryCourses.map((course, index) => (
          <Container key={`courseItem-${index}`}>
              <Link className="container" to={`/course/${course.slug}`}>
                  <Card.Img
                    variant="top"
                    src={course.thumbnail}
                    className="images"
                  />
                  <div className="card-item">
                    <h6 className="card-title">{course.title}</h6>
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
              </Link>
          </Container>
        ))}
      </>
    );
  }
}
export default CoursesByCategory;
