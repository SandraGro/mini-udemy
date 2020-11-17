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

async function fetchUser(setUser, featuredCourses) {
  try {
    const users = await axios.get("/Users.json");
    if (users) {
      let user = Object.values(users.data).filter(
        (user) => user.username === "Sandra"
      )[0];
      // Definición de arreglos con los slugs
      console.log(user);
      let wishlistSlugs = Object.entries(user.wishlistCourses);
      console.log(user.wishlistCourses);
      let myCoursesSlugs = Object.entries(user.myCourses);
      setUser({
        //Copia del usuario y sobreescribir las propiedades con el nuevo arreglo de los elementros filtrados correspondiente al objeto del curso con las propiedades completas.
        ...user,
        myCourses: myCoursesSlugs.map(([id, slug]) => {
          let course = {
            ...featuredCourses.filter((course) => course.slug === slug)[0],
            id: id,
          };
          return course;
        }),
        wishlistCourses: wishlistSlugs.map(([id, slug]) => {
          let course = {
            ...featuredCourses.filter((course) => course.slug === slug)[0],
            id: id,
          };
          return course;
        }),
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function addCourseToWishlist(slug, user, setUser, featuredCourses) {
  console.log(user.wishlistCourses, "user");
  //condición para ver si el slug se encuentra en los wishlist courses del usuario
  const duplicatedCourses = user.wishlistCourses.filter(
    (course) => slug === course.slug
  );
  console.log(duplicatedCourses, "duplicated");
  if (duplicatedCourses.length) {
    try {
      const userId = user.id;
      const result = await axios.delete(
        `Users/${userId}/wishlistCourses/${duplicatedCourses[0].id}.json`
      );
      if (result) {
        return fetchUser(setUser, featuredCourses);
      }
      //TODO
      //Cambiar botón "buy now" to "go to course"
      console.log(result, "result");
    } catch (error) {}
  }
  try {
    const propPrefix = "wishlistCourse";
    const userId = user.id;
    const result = await axios.patch(`/Users/${userId}/wishlistCourses.json`, {
      [propPrefix + (user.wishlistCourses.length + 1)]: slug,
    });
    if (result) {
      fetchUser(setUser, featuredCourses);
    }
    console.log(result, "result");
  } catch (error) {}
}

async function addCourseToAllCourses(slug, user, setUser, featuredCourses) {
  //condición para ver si el slug se encuentra en los wishlist courses del usuario
  const duplicatedCourses = user.myCourses.filter(
    (course) => slug === course.slug
  );
  if (duplicatedCourses.length) {
    return;
  }
  try {
    const propPrefix = "myCourse";
    const userId = user.id;
    const result = await axios.patch(`/Users/${userId}/myCourses.json`, {
      [propPrefix + user.myCourses.length]: slug,
    });
    if (result) {
      fetchUser(setUser, featuredCourses);
    }
  } catch (error) {}
}

function App() {
  const [featuredCourses, setFeatureCourses] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const setData = async () => {
      try {
        const courses = await axios.get("/featuredCourses.json");
        let featuredCourses;
        if (courses) {
          featuredCourses = Object.values(courses.data);
          setFeatureCourses(featuredCourses);
          fetchUser(setUser, featuredCourses);
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
            <CourseDetail
              featuredCourses={featuredCourses}
              user={user}
              setUser={setUser}
              addCourseToWishlist={addCourseToWishlist}
              addCourseToAllCourses={addCourseToAllCourses}
            />
          </Route>
          <Route
            path="/mycourses/:subsection"
            render={({ match }) => (
              <MyCourses
                featuredCourses={featuredCourses}
                user={user}
                activeSection={match.params.subsection}
              />
            )}
          ></Route>
          <Route
            path="/:genericSection"
            render={() => <InfoTemplate />}
          ></Route>
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
