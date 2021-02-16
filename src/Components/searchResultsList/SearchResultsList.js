import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function SearchResultList(props) {
  let { searchTerm } = useParams();
  const searchResult = props.featuredCourses.filter((courseItem) => {
    const { title, author, category } = courseItem;
    const concatenatedString = `${title} ${author} ${category}`.toLowerCase();
    return concatenatedString.includes(searchTerm);
  });
  return (
    <Container>
      <Row>
        {!props.featuredCourses || !props.featuredCourses.length ? (
          <p>Your cart is empty. Keep shopping to find a course!</p>
        ) : (
          searchResult.map((course, index) => (
            <Col key={`course-item-container-${index}`} sm={9}>
              <Row>
                <Col sm={12}>
                  <Row>
                    <Col sm={8}>
                      <div className="course-container">
                        <Link to={`/course/${course.slug}`}>
                          <div className="course-card-content">
                            <img
                              alt=""
                              src={course.thumbnail}
                              className="images thumbnail float-left"
                            />
                            <h6 className="card-title">{course.title}</h6>
                            <br />
                            <small>{course.author}</small>
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
