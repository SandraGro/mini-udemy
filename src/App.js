import React from 'react';
import Layout from './Components/Layout/Layout';
import BenefitsContainer from './Components/BenefitsContainer/BenefitsContainer';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import FeaturedCourses from './Components/FeaturedCourses/FeaturedCourses';
import Banner from './Components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Layout>
      <Switch>
        <Route path="/course/:courseSlug" >
          <CourseDetail />
        </Route>
        <Route path="/">
          <Banner />
          <BenefitsContainer />
          <hr></hr>
          <FeaturedCourses />
        </Route>
      </Switch>
    </Layout>
  </Router>
  );
}

export default App;
 