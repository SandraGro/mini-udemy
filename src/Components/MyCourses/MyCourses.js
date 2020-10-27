import React, { Component } from 'react';
import { CardDeck, Card, Badge} from 'react-bootstrap';

class MyCourses extends Component {
    render() {
        return (
          <>
            <CardDeck>
              {this.props.featuredCourses.map((course, index) => (
                <Card className="course-card" key={`cardDeck-${index}`}>
                    <Card.Img variant="top" src={course.thumbnail} />
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text>{course.author}</Card.Text>
                      <span>${course.discountedPrice} </span>
                      <span>${course.originalPrice}</span>
                      {course.bestseller ? (
                        <Badge variant="warning">Bestseller</Badge>
                      ) : (
                        ""
                      )}
                    </Card.Body>
                </Card>
              ))}
            </CardDeck>
          </>
        );
      }

}

export default MyCourses;