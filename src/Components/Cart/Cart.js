import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(null);
  const [saveForLaterList, setSaveForLaterList] = useState([]);
  const [recentlyWishlisted, setRecentlyWishlisted] = useState([]);
  useEffect(() => {
    if (props.user.cart) {
      setTotalPrice(
        props.user.cart.reduce((total, course) => {
          return (
            total + parseInt(course.discountedPrice || course.originalPrice)
          );
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
          {!props.user.cart || !props.user.cart.length ? (
            <p>Your cart is empty. Keep shopping to find a course!</p>
          ) : (
            props.user.cart.map((course, index) => (
              <Col key={`courseItem-${index}`} sm={9}>
                <div className="container">
                  <Link to={`/course/${course.slug}`}>
                    <img
                      alt=""
                      src={course.thumbnail}
                      className="images thumbnail"
                    />
                    <div className="card-item card-content">
                      <h6 className="card-title">{course.title}</h6>
                      <div>
                        <small>{course.author} </small>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <span>
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
                          setSaveForLaterList([...saveForLaterList, course]);
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
                          console.log(props.user.wishlistCourses, 'user')
                          props.addCourseToWishlist(
                            course.slug,
                            props.user,
                            props.setUser,
                            props.featuredCourses,
                            false
                          )
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
                    </span>
                  </div>
                  <Link className="container" to={`/course/${course.slug}`}>
                    <div className="price">
                      <p>${course.originalPrice} </p>
                      <p>${course.discountedPrice} </p>
                    </div>
                  </Link>
                </div>
                <hr />
              </Col>
            ))
          )}
          <Col sm={3}>
            <h6>Total:</h6>
            {props.user.cart ? (
              <h1>{totalPrice}</h1>
            ) : (
              <h1> There are no courses in the cart</h1>
            )}
            <Button variant="danger" size="lg" block>
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <p>Saved for later</p>
        <Row>
          {!saveForLaterList.length ? (
            <p>You haven't saved any courses for later.</p>
          ) : (
            saveForLaterList.map((course, index) => (
              <Col key={`courseItem-${index}`} sm={9}>
                <div className="container">
                  <Link to={`/course/${course.slug}`}>
                    <img
                      alt=""
                      src={course.thumbnail}
                      className="images thumbnail"
                    />
                    <div className="card-item card-content">
                      <h6 className="card-title">{course.title}</h6>
                      <div>
                        <small>{course.author} </small>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <span>
                      <Button
                        className="link-button"
                        onClick={() =>
                          setSaveForLaterList(saveForLaterList.filter(courseItem => courseItem.slug !== course.slug))
                        }
                      >
                        Remove
                      </Button>
                      <Button
                        className="link-button"
                        onClick={() => {
                          setSaveForLaterList(saveForLaterList.filter(courseItem => courseItem.slug !== course.slug));
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
                    </span>
                  </div>
                  <Link className="container" to={`/course/${course.slug}`}>
                    <div className="price">
                      <p>${course.originalPrice} </p>
                      <p>${course.discountedPrice} </p>
                    </div>
                  </Link>
                </div>
                <hr />
              </Col>
            ))
          )}
        </Row>
      </Container>
      <Container>
        <p>Recently wishlisted</p>
        <Row>
          {!(props.user.wishlistCourses && props.user.wishlistCourses.length) ? (
            <p>You haven't added any courses to your wishlist.</p>
          ) : (
            props.user.wishlistCourses.map((course, index) => (
              <Col key={`courseItem-${index}`} sm={9}>
                <div className="container">
                  <Link to={`/course/${course.slug}`}>
                    <img
                      alt=""
                      src={course.thumbnail}
                      className="images thumbnail"
                    />
                    <div className="card-item card-content">
                      <h6 className="card-title">{course.title}</h6>
                      <div>
                        <small>{course.author} </small>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <span>
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
                            props.featuredCourses,
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
                    </span>
                  </div>
                  <Link className="container" to={`/course/${course.slug}`}>
                    <div className="price">
                      <p>${course.originalPrice} </p>
                      <p>${course.discountedPrice} </p>
                    </div>
                  </Link>
                </div>
                <hr />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export default Cart;
