import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import BenefitsContainer from "./Components/BenefitsContainer/BenefitsContainer";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import FeaturedCourses from "./Components/FeaturedCourses/FeaturedCourses";
import Banner from "./Components/Banner/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios-intance";

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
  return (
    <Router>
      <Layout featuredCourses={featuredCourses}>
        <Switch>
          <Route path="/course/:courseSlug">
            <CourseDetail featuredCourses={featuredCourses} />
          </Route>
          <Route path="/">
            <Banner />
            <BenefitsContainer />
            <hr></hr>
            <FeaturedCourses featuredCourses={featuredCourses}/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
