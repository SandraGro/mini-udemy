import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import BenefitsContainer from "./Components/BenefitsContainer/BenefitsContainer";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import FeaturedCourses from "./Components/FeaturedCourses/FeaturedCourses";
import Banner from "./Components/Banner/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios-intance";
import CoursesByCategory from "./Components/CoursesByCategory/CoursesByCategory";

function App() {
  const [featuredCourses, setFeatureCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/featuredCourses.json")
      .then((response) => {
        setFeatureCourses(Object.values(response.data));
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }, []);
  const sortByCategory = (courses) => {
    let coursesByCategory = {};
    for (let course of courses) {
      if (coursesByCategory[course.category] === undefined) {
        coursesByCategory[course.category] = [];
      }
      coursesByCategory[course.category].push(course);
    }
    return coursesByCategory;
  };
  const filteredCourses = sortByCategory(featuredCourses);
  return (
    <Router>
      <Layout featuredCourses={featuredCourses}>
        <Switch>
          {
            // Access to params using match property of the Route (similar to useParams hook)
          }
          <Route
            path="/course/category/:categoryName"
            render={({ match }) => (
              <CoursesByCategory
                categoryCourses={
                  filteredCourses[match.params.categoryName] || []
                }
              />
            )}
          ></Route>
          <Route path="/course/:courseSlug">
            <CourseDetail filteredCourses={filteredCourses} />
          </Route>
          <Route path="/">
            <Banner />
            <BenefitsContainer />
            <hr></hr>
            <FeaturedCourses filteredCourses={filteredCourses} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
