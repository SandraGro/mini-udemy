import React from "react";
import { Badge, Container, Card, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Cart(props) {
  console.log(props.user.cart, "courses in cart");
  return (
    <>
      {!props.user.cart || !props.user.cart.length ? (
        <p>Your cart is empty. Keep shopping to find a course!</p>
      ) : (
        props.user.cart.map((course, index) => (
          <Container key={`courseItem-${index}`}>
            <Row>
              <Col>
                <Link className="container" to={`/course/${course.slug}`}>
                  <Card.Img
                    variant="top"
                    src={course.thumbnail}
                    className="images"
                  />
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
                </Link>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        ))
      )}
    </>
  );
}

export default Cart;
