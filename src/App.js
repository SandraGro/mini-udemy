import React from 'react';
import Layout from './Components/Layout/Layout';
import BenefitsContainer from './Components/BenefitsContainer/BenefitsContainer';
import FeaturedCourses from './Components/FeaturedCourses/FeaturedCourses';
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
        <Route path="/">
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
 