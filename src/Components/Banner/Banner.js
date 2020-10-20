import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel className="carousel-home">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
