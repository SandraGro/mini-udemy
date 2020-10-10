import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Courses from './Courses/Courses';

class FeaturedCourses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      featuredCourses: [{
        title: 'The Complete Foundation Stock Trading Course',
        author: 'Mohsen Hassan, bloom team',
        rating: '4.5',
        originalPrice: '$499',
        discountedPrice: '$199',
        thumbnail: 'https://img-a.udemycdn.com/course/240x135/1288044_d262_4.jpg?ef_bGb-l7fymYgM8RbuBZoZyX3X5vrxq-J65lDugvCyBEjaZ9vn9RYzF1CsNGQlqB9dmg9m99a52hI54pSPRY-BcxZ4pXpmNN7UCk09Ho8qhVuWGujXM8wZ8D7_bB148',
        reviews: '280',
        bestseller: true,
        category: 'Business'
    }, 
    {
      title: 'Microsoft Power BI - Up & Running With Power BI Desktop',
      author: 'Maven Analytics, Chris Dutton, Aaron Parry',
      rating: '4.6',
      originalPrice: '$1799',
      discountedPrice: '$199',
      thumbnail: 'https://img-a.udemycdn.com/course/240x135/1288044_d262_4.jpg?ef_bGb-l7fymYgM8RbuBZoZyX3X5vrxq-J65lDugvCyBEjaZ9vn9RYzF1CsNGQlqB9dmg9m99a52hI54pSPRY-BcxZ4pXpmNN7UCk09Ho8qhVuWGujXM8wZ8D7_bB148',
      reviews: '280',
      bestseller: true,
      category: 'Business'
    }]}
  }
  render() {
    return (
      <>
        <h4>The world's largest selection of courses</h4>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Business</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Design</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-2">Photography</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-3">Development</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-3">Marketing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-3">IT & Software</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-3">Personal Development</Nav.Link>
          </Nav.Item>
        </Nav>
        <Courses {...this.state.featuredCourses[0]}/>
      </>
    );
  }
}
export default FeaturedCourses;
