import React, { useState, useEffect } from "react";
import { Badge, Button, Card, Modal, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "./CourseDetail.scss";
import { useParams, useLocation } from "react-router-dom";

function CourseDetail(props) {
  let { courseSlug } = useParams();
  let location = useLocation();
  const [featureCourse, setFeatureCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let courseList = props.featuredCourses;
    setFeatureCourse(
      courseList.filter((course) => {
        return course.slug === courseSlug;
      })[0]
    );
  }, [props.featuredCourses, courseSlug]);
  if (!featureCourse) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="sidebar-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={featureCourse.thumbnail} />
          <span className="play-button">
            <FontAwesomeIcon icon={icons.faPlayCircle} size="5x" />
          </span>
          <Card.Body>
            <Card.Title>${featureCourse.discountedPrice} </Card.Title>
            <Card.Text>${featureCourse.originalPrice}</Card.Text>
            <Button className="card-button" variant="danger">
              Add to cart
            </Button>
            <Button className="card-button" variant="outline-success">
              Buy now
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="py-5 top-container">
        <div className="title-container">
          <h1 className="title-course">{featureCourse.title}</h1>
          <div className="subtitle-course">{featureCourse.description}</div>
          <div className="rating-container">
            {featureCourse.bestseller ? (
              <Badge variant="warning">Bestseller</Badge>
            ) : (
              ""
            )}
            <span className="rating">{featureCourse.rating}</span>
            <ReactStars
              count={Number.parseInt(featureCourse.rating)}
              onChange="5"
              size={14}
              activeColor="#ffd700"
            />
          </div>
          <div>
            <span className="light-text">
              <span>Created by </span>
              <span>{featureCourse.author}</span>
            </span>
          </div>
          <div className="light-text">
            <span className="last-update-date__icon">
              <FontAwesomeIcon icon={icons.faExclamationCircle} />
            </span>
            <span>Last updated 10/2019</span>
            <span className="last-update-date__icon">
              <FontAwesomeIcon icon={icons.faCircleNotch} />
            </span>
            <span>English</span>
          </div>
          <Button
            className="mr-1 mt-2"
            variant="outline-light"
            onClick={() => props.addCourseToWishlist(courseSlug, props.user, props.setUser, props.featuredCourses)}
          >
            Wishlist <FontAwesomeIcon icon={icons.faHeart} />
          </Button>
          <Button
            className="mr-1 mt-2"
            variant="outline-light"
            onClick={() => setIsOpen(true)}
          >
            Share <FontAwesomeIcon icon={icons.faShare} />
          </Button>
          <Button className="mr-1 mt-2" variant="outline-light">
            Gift this course
          </Button>
          <Modal
            size="lg"
            show={isOpen}
            onHide={() => setIsOpen(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Share this course
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form inline>
                <input
                  className="share-input"
                  type="text"
                  defaultValue={`http://localhost:3000${location.pathname}`}
                />
                <Button variant="info">Copy</Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="course-content">
        <Card>
          <Card.Body>
            <p>What you'll learn</p>
            <footer className="blockquote-footer">
              <p>
                You'll learn how to use Adobe XD to design and prototype apps
                from scratch
              </p>
              <p>
                You'll learn tools that are universal across multiple design
                apps to enhance your design workflow
              </p>
              <p>
                You'll learn how to incorporate best practices in reusing design
                elements and styles to increase efficiency
              </p>
            </footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CourseDetail;
