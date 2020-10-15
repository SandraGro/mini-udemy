import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Courses from './Courses/Courses';

class FeaturedCourses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeCategory: 'Business',
      featuredCourses: 
      [{
        title: 'The Complete Foundation Stock Trading Course',
        author: 'Mohsen Hassan, bloom team',
        rating: '4.5',
        originalPrice: '$499',
        discountedPrice: '$199',
        thumbnail: 'https://img-a.udemycdn.com/course/240x135/1288044_d262_4.jpg?ef_bGb-l7fymYgM8RbuBZoZyX3X5vrxq-J65lDugvCyBEjaZ9vn9RYzF1CsNGQlqB9dmg9m99a52hI54pSPRY-BcxZ4pXpmNN7UCk09Ho8qhVuWGujXM8wZ8D7_bB148',
        reviews: '280',
        bestseller: true,
        category: 'Business',
        slug: 'the-complete-foundation-stock-trading-course',
    }, 
    {
      title: 'Microsoft Power BI - Up & Running With Power BI Desktop',
      author: 'Maven Analytics, Chris Dutton, Aaron Parry',
      rating: '4.6',
      originalPrice: '$1799',
      discountedPrice: '$199',
      thumbnail: 'https://img-a.udemycdn.com/course/240x135/1570206_26c6_4.jpg?g8DduwjeA8HsswHzYgiXUtz6we5mlR8fZwZTOOiLRV_SDp6WrWeP60dbsn39RYZ8LeZ_AGw_83G_ZtD1liDXFONlo5HZ3vOenyCHGExd7xOtWGEATQntUVJUFracgzUv 1x, https://img-a.udemycdn.com/course/480x270/1570206_26c6_4.jpg?e7VxEUn4ma5roTuwqcqoY3XuIWsbRFpScdS_hPD3KC1ft8agSQfASBWyPYv7bMGSQr83gnj_jiDyFYHycJV9f4YI6KNR32aGsiV4obmIVNqKtdFoMozRquPIwoZ3SEf9 2x',
      reviews: '280',
      bestseller: true,
      category: 'Business',
      slug: 'microsoft-power-bi-up-running-with-power-bi-desktop',
    },
    {
      title: 'User Experience Design Essentials - Adobe XD UI UX Design',
      author: 'Scott Harris',
      rating: '4.6',
      originalPrice: '$1799',
      discountedPrice: '$199',
      thumbnail: 'https://img-a.udemycdn.com/course/240x135/1409030_6722_4.jpg?dy8Ub2XAAAr8HcWzmA9S_dbvC9uyBKMhqaiRpLDYBDAxdw9C17vySFBnffgt8iQRoHmrc0fHmza0r56EJAwjp9t2Gdif1ys73GumgPljd9aZImT2OY8Uyj3OJ1ZwKzqr 1x, https://img-a.udemycdn.com/course/480x270/1409030_6722_4.jpg?Roh5RFEjuNcFa8rTGXtW7Roo5iSeydrPa7-SIrB4Q8uacnXKe78LaTKwWAbkIOmUWMQhDBiHSNFV8Z-6RfDOL-qxRbtcK7KRDydReHlErLrOC66VB5Ihh5IsV7iFSvuz 2x',
      reviews: '280',
      bestseller: true,
      category: 'Design',
      slug: 'user-experience-design-essentials-adobe-xd--ui-ux-design',
    },
    {
      title: 'Photography Beginners: DSLR Photography Camera Settings',
      author: 'Rosie Parsons',
      rating: '4.3',
      originalPrice: '$1899',
      discountedPrice: '$199',
      thumbnail: 'https://img-a.udemycdn.com/course/240x135/410068_fea4_2.jpg?wDi_M1EPjqGCGSsbayaIh6zdHgLJ3xAM3k141WGTLZobHVnimb2-w1v-JMz0nLS3moRC9ELSwwGgwaUTM7BAXGIMHjKndo5VQRaHWz3m5ik7Zrq3LWd8b4bB8U1YfU0 1x, https://img-a.udemycdn.com/course/480x270/410068_fea4_2.jpg?haWxl114j3nK9Diz0-CyfCeMXHik7Jfkvz6o5eK7x0AY2IFa6gdZE-YrdFuDRkfQOQI_cHj1DtyDFqG9ZP52poPnQheK1ihP4NxfekiXWUq9rvftJa54_2v-IeuxKAo 2x',
      reviews: '280',
      bestseller: true,
      category: 'Photography',
      slug: 'photography-beginners-photography-camera-settings',
    },
  ]}
  }
  sortByCategory (courses) {
    let coursesByCategory = {};
    for (let course of courses){
      if(coursesByCategory[course.category] === undefined){
        coursesByCategory[course.category] = [];
      }
      coursesByCategory[course.category].push(course);
    }
    return coursesByCategory;
  }
  render() {
    const filteredCourses = this.sortByCategory(this.state.featuredCourses);
    return (
      <>
        <h4>The world's largest selection of courses</h4>
        <Nav activeKey={"link-" + this.state.activeCategory} variant="tabs">
          {Object.keys(filteredCourses).map((category, index) =>
          {
            return (
            <Nav.Item key={`category-${index}`}>
              <Nav.Link eventKey={`link-${category}`} onClick={()=> this.setState({activeCategory: category })}>{category}</Nav.Link>
            </Nav.Item>
          )})}
        </Nav>
        <Courses featuredCourses = {filteredCourses[this.state.activeCategory]}/>
      </>
    );
  }
}
export default FeaturedCourses;
