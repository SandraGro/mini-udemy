import React from "react";
import { Card, Badge } from 'react-bootstrap';
import "./Courses.scss";


function Courses (props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src= {props.thumbnail}
      />
      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text>
          {props.author}
        </Card.Text>
        <span>{props.discountedPrice}</span>
        <span>{props.originalPrice}</span>
        {props.bestseller ? <Badge variant="warning">Bestseller</Badge> : '' }
      </Card.Body>
    </Card>
  );
}

export default Courses;
