import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";

function Cart(props) {
  const [totalOriginalPrice, setTotalOriginalPrice] = useState(null);
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(null);

  const [isOpenBuyModal, setIsOpenBuyModal] = useState(false);
  console.log(props.user.cart);

  useEffect(() => {
    if (props.user.cart) {
      setTotalOriginalPrice(
        props.user.cart.reduce((total, course) => {
          return total + parseInt(course.originalPrice || 0);
        }, 0)
      );
      setTotalDiscountedPrice(
        props.user.cart.reduce((total, course) => {
          return total + parseInt(course.discountedPrice || 0);
        }, 0)
      );
    }
  }, [props.user.cart]);
  return (
    <>
      <Container>
        {props.user.cart ? (
          <p> {props.user.cart.length} courses in cart</p>
        ) : (
          ""
        )}
        <Row>
          <Col key={`courseItem-container`} sm={9}>
            <Row>
              {!props.user.cart || !props.user.cart.length ? (
                <p>Your cart is empty. Keep shopping to find a course!</p>
              ) : (
                props.user.cart.map((course, index) => (
                  <Col key={`courseItem-${index}`} sm={12}>
                    <Row>
                      <Col key={`courseItem-${index}`} sm={8}>
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
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col key={`courseLinks-${index}`} sm={2}>
                        <Button
                          className="link-button"
                          onClick={() =>
                            props.addCourseToCart(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            )
                          }
                        >
                          Remove
                        </Button>
                        <Button
                          className="link-button"
                          onClick={() => {
                            props.addCourseToSaveforLaterList(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                            props.addCourseToCart(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                          }}
                        >
                          Save for later
                        </Button>
                        <Button
                          className="link-button"
                          onClick={() => {
                            console.log(props.user.wishlistCourses, "user");
                            props.addCourseToWishlist(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses,
                              false
                            );
                            props.addCourseToCart(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                          }}
                        >
                          Move to wishlist
                        </Button>
                      </Col>
                      <Col sm={2}>
                        <Link
                          className="course-container"
                          to={`/course/${course.slug}`}
                        >
                          <div className="price">
                            <p className="discounted-price">
                              ${course.discountedPrice}{" "}
                              <span className="tag-icon">
                                <FontAwesomeIcon icon={icons.faTag} size="1x" />
                              </span>
                            </p>
                            <p className="original-price">
                              ${course.originalPrice}{" "}
                            </p>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                    <hr />
                  </Col>
                ))
              )}
            </Row>
          </Col>
          <Col sm={3} className="align-top">
            <h6>Total:</h6>
            {props.user.cart ? (
              <h1>MXN${totalDiscountedPrice}</h1>
            ) : (
              <h1> There are no courses in the cart</h1>
            )}
            <Button
              variant="danger"
              size="lg"
              block
              onClick={() => setIsOpenBuyModal(true)}
            >
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={isOpenBuyModal} onHide={() => setIsOpenBuyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={8} md={8}>
                Original Price:
              </Col>
              <Col xs={4} md={4}>
                MXN${totalOriginalPrice}
              </Col>
            </Row>
            <Row>
              <Col xs={8} md={8}>
                Coupon discounts:
              </Col>
              <Col xs={4} md={4}>
                MMXN${totalDiscountedPrice - totalOriginalPrice}
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col xs={8} md={8}>
                Total:
              </Col>
              <Col xs={4} md={4}>
                MMXN${totalDiscountedPrice}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setIsOpenBuyModal(false);
            }}
          >
            Complete Payment
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <p>Saved for later</p>
        <Row>
          <Col key={`courseItem-container`} sm={9}>
            <Row>
              {!(
                props.user.laterListCourses &&
                props.user.laterListCourses.length
              ) ? (
                <p>You haven't saved any courses for later.</p>
              ) : (
                props.user.laterListCourses.map((course, index) => (
                  <Col key={`courseItem-${index}`} sm={12}>
                    <Row>
                      <Col key={`courseItem-${index}`} sm={8}>
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
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col key={`courseLinks-${index}`} sm={2}>
                        <Button
                          className="link-button"
                          onClick={() =>
                            props.addCourseToSaveforLaterList(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            )
                          }
                        >
                          Remove
                        </Button>
                        <Button
                          className="link-button"
                          onClick={() => {
                            props.addCourseToSaveforLaterList(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                            props.addCourseToCart(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                          }}
                        >
                          Move to cart
                        </Button>
                      </Col>
                      <Col sm={2}>
                        <Link
                          className="course-container"
                          to={`/course/${course.slug}`}
                        >
                          <div className="price">
                            <p className="discounted-price">
                              ${course.discountedPrice}{" "}
                              <span className="tag-icon">
                                <FontAwesomeIcon icon={icons.faTag} size="1x" />
                              </span>
                            </p>
                            <p className="original-price">
                              ${course.originalPrice}{" "}
                            </p>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                    <hr />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <p>Recently wishlisted</p>
        <Row>
          <Col key={`courseItem-container`} sm={9}>
            <Row>
              {!(
                props.user.wishlistCourses && props.user.wishlistCourses.length
              ) ? (
                <p>You haven't added any courses to your wishlist.</p>
              ) : (
                props.user.wishlistCourses.map((course, index) => (
                  <Col key={`courseItem-${index}`} sm={12}>
                    <Row>
                      <Col key={`courseItem-${index}`} sm={8}>
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
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col key={`courseLinks-${index}`} sm={2}>
                        <Button
                          className="link-button"
                          onClick={() =>
                            props.addCourseToWishlist(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            )
                          }
                        >
                          Remove
                        </Button>
                        <Button
                          className="link-button"
                          onClick={() => {
                            props.addCourseToWishlist(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                            props.addCourseToCart(
                              course.slug,
                              props.user,
                              props.setUser,
                              props.featuredCourses
                            );
                          }}
                        >
                          Move to cart
                        </Button>
                      </Col>
                      <Col sm={2}>
                        <Link
                          className="course-container"
                          to={`/course/${course.slug}`}
                        >
                          <div className="price">
                            <p className="discounted-price">
                              ${course.discountedPrice}{" "}
                              <span className="tag-icon">
                                <FontAwesomeIcon icon={icons.faTag} size="1x" />
                              </span>
                            </p>
                            <p className="original-price">
                              ${course.originalPrice}{" "}
                            </p>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                    <hr />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
