import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

function SearchResultList(props) {
  console.log();
  return (
    <Container>
      <Row>
        {!props.featuredCourses || !props.featuredCourses.length ? (
          <p>Your cart is empty. Keep shopping to find a course!</p>
        ) : (
          props.featuredCourses.map((course, index) => (
            <Col key={`course-item-container`} sm={9}>
              <Row>
                <Col sm={12}>
                  <Row>
                    <Col sm={8}>
                      <div className="course-container">
                        <Link to="">
                          <div className="course-card-content">
                            <img
                              alt=""
                              src={course.thumbnail}
                              className="images thumbnail float-left"
                            />
                            <h6 className="card-title">{course.title}</h6>
                            <br />
                            <small>Author</small>
                            <div className="price">
                              <p className="discounted-price">
                                ${course.discountedPrice}{" "}
                                <span className="tag-icon">
                                  <FontAwesomeIcon
                                    icon={icons.faTag}
                                    size="1x"
                                  />
                                </span>
                              </p>
                              <p className="original-price">
                                ${course.originalPrice}{" "}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                </Col>
              </Row>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default SearchResultList;
