import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import BenefitsContainer from "./Components/BenefitsContainer/BenefitsContainer";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import FeaturedCourses from "./Components/FeaturedCourses/FeaturedCourses";
import Banner from "./Components/Banner/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios-intance";
import CoursesByCategory from "./Components/CoursesByCategory/CoursesByCategory";
import MyCourses from "./Components/MyCourses/MyCourses";
import InfoTemplate from "./Components/InfoTemplates/InfoTemplate";

function App() {
  const [featuredCourses, setFeatureCourses] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const setData = async () => {
      try {
        const courses = await axios.get("/featuredCourses.json");
        let featuredCourses;
        if (courses) {
          featuredCourses = Object.values(courses.data);
          setFeatureCourses(featuredCourses);
        }
        const users = await axios.get("/Users.json");
        if (users) {
          let user = Object.values(users.data).filter(
            (user) => user.username === "Sandra"
          )[0];
          // Definición de arreglos con los slugs
          let wishlistSlugs = Object.values(user.wishlistCourses);
          let myCoursesSlugs = Object.values(user.myCourses);
          setUser({
            //Copia del usuario y sobreescribir las propiedades con el nuevo arreglo de los elementros filtrados correspondiente al objeto del curso con las propiedades completas.
            ...user,
            myCourses: myCoursesSlugs.map((slug) => {
              console.log(slug, featuredCourses, "map");
              return featuredCourses.filter(
                (course) => course.slug === slug
              )[0];
            }),
            wishlistCourses: wishlistSlugs.map((slug) => {
              return featuredCourses.filter(
                (course) => course.slug === slug
              )[0];
            }),
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    setData();
    //   axios
    //     .get("/featuredCourses.json")
    //     .then((response) => {
    //       setFeatureCourses(Object.values(response.data));
    //     })
    //     .catch((error) => {
    //       this.setState({ error: true });
    //     });
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
  console.log(user, "user");
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
                  match.params.categoryName === "allcourses"
                    ? featuredCourses
                    : filteredCourses[match.params.categoryName] || []
                }
              />
            )}
          ></Route>
          <Route path="/course/:courseSlug">
            <CourseDetail featuredCourses={featuredCourses} />
          </Route>
          <Route
            path="/mycourses/:subsection"
            render={({ match }) => (
              <MyCourses
                featuredCourses={featuredCourses}
                activeSection={match.params.subsection}
              />
            )}
          ></Route>
          <Route path="/:genericSection" render={() => <InfoTemplate />}></Route>
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
