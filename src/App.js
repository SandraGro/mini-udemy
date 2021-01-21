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
import Cart from "./Components/Cart/Cart";
import SearchResultList from "./Components/searchResultsList/SearchResultsList";

async function fetchUser(setUser, featuredCourses) {
  try {
    const users = await axios.get("/Users.json");
    if (users) {
      let user = Object.values(users.data).filter(
        (user) => user.username === "Sandra"
      )[0];
      user.wishlistCourses = user.wishlistCourses || [];
      user.laterList = user.laterList || [];
      let laterListSlugs = Object.entries(user.laterList);
      let wishlistSlugs = Object.entries(user.wishlistCourses);
      let myCoursesSlugs = Object.entries(user.myCourses);
      let cartSlugs = Object.entries(user.cart).filter(
        (item) => item[1] !== ""
      );
      setUser({
        ...user,
        myCourses: myCoursesSlugs.map(([id, courseItem]) => {
          let course = {
            ...featuredCourses.filter(
              (course) => course.slug === courseItem.course
            )[0],
            id: id,
          };
          return course;
        }),
        wishlistCourses: wishlistSlugs.map(([id, wishlistItem]) => {
          console.log(id, wishlistItem);
          let course = {
            ...featuredCourses.filter(
              (course) => course.slug === wishlistItem.course
            )[0],
            id: id,
          };
          return course;
        }),
        laterListCourses: laterListSlugs.map(([id, laterListItem]) => {
          console.log(id, laterListItem);
          let course = {
            ...featuredCourses.filter(
              (course) => course.slug === laterListItem.course
            )[0],
            id: id,
          };
          return course;
        }),
        cart: cartSlugs.map(([id, slug]) => {
          let course = {
            ...featuredCourses.find((course) => course.slug === slug),
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

async function getCourses() {
  return axios.get("/featuredCourses.json");
}

async function searchCourse(searchTerm) {
  if (searchTerm.length < 2) {
    return [];
  }
  try {
    const courses = await getCourses();
    return Object.values(courses.data).filter((courseItem) => {
      const { title, author, category } = courseItem;
      const concatenatedString = `${title} ${author} ${category}`.toLowerCase();
      return concatenatedString.includes(searchTerm);
    });
    // curl 'https://dinosaur-facts.firebaseio.com/dinosaurs.json?orderBy="height"&startAt=3&print=pretty'
  } catch (error) {
    console.error(error);
  }
}

async function addCourseToWishlist(
  slug,
  user,
  setUser,
  featuredCourses,
  deleteIfMatches = true
) {
  console.log(user);
  const duplicatedCourses = user.wishlistCourses.filter((course) => {
    return slug === course.slug;
  });

  try {
    // condición para borrar el elemento si esta duplicado y deleteIfMatches es verdadero
    if (deleteIfMatches && duplicatedCourses.length) {
      const userId = user.id;
      const result = await axios.delete(
        `Users/${userId}/wishlistCourses/${duplicatedCourses[0].id}.json`
      );
      if (result) {
        return fetchUser(setUser, featuredCourses);
      }
    }

    // condición para saltarnos la ejecución si ya esta el curso en el wishlist
    if (!deleteIfMatches && duplicatedCourses.length) return;
    const userId = user.id;
    const result = await axios.post(`/Users/${userId}/wishlistCourses.json`, {
      course: slug,
    });
    if (result) {
      fetchUser(setUser, featuredCourses);
    }
  } catch (error) {
    console.error(error);
  }
}

async function addCourseToSaveforLaterList(
  slug,
  user,
  setUser,
  featuredCourses,
  deleteIfMatches = true
) {
  console.log(user);
  const duplicatedCourses = user.laterListCourses.filter((course) => {
    return slug === course.slug;
  });

  // condición para borrar el elemento si esta duplicado y deleteIfMatches es verdadero
  if (deleteIfMatches && duplicatedCourses.length) {
    const userId = user.id;
    const result = await axios.delete(
      `Users/${userId}/laterList/${duplicatedCourses[0].id}.json`
    );
    if (result) {
      return fetchUser(setUser, featuredCourses);
    }
  }

  // condición para saltarnos la ejecución si ya esta el curso en el wishlist
  if (!deleteIfMatches && duplicatedCourses.length) return;

  const userId = user.id;
  await axios.post(`/Users/${userId}/laterList.json`, {
    course: slug,
  });
  fetchUser(setUser, featuredCourses);
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
    const userId = user.id;
    const result = await axios.post(`/Users/${userId}/myCourses.json`, {
      course: slug,
    });
    if (result) {
      fetchUser(setUser, featuredCourses);
    }
  } catch (error) {}
}

function generateRandomHash(propPrefix) {
  return `${propPrefix}-${Math.round(Math.random() * 10000)}`;
}

async function addCourseToCart(slug, user, setUser, featuredCourses) {
  console.log(user);
  const duplicatedCourses = user.cart.filter((course) => slug === course.slug);
  if (duplicatedCourses.length) {
    try {
      const userId = user.id;
      const result = await axios.delete(
        `Users/${userId}/cart/${duplicatedCourses[0].id}.json`
      );
      if (result) {
        return fetchUser(setUser, featuredCourses);
      }
    } catch (error) {}
  }
  try {
    const propPrefix = "cart";
    const userId = user.id;
    const result = await axios.patch(`/Users/${userId}/cart.json`, {
      [generateRandomHash(propPrefix)]: slug,
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
        const courses = await getCourses();
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
      <Route
        render={(props) => (
          <Layout
            props={{...props}}
            user={user}
            featuredCourses={featuredCourses}
            searchCourse={searchCourse}
          >
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
              <Route path="/course/search/:searchTerm">
                <SearchResultList
                  user={user}
                  setUser={setUser}
                  featuredCourses={featuredCourses}
                />
              </Route>
              <Route path="/course/:courseSlug">
                <CourseDetail
                  featuredCourses={featuredCourses}
                  user={user}
                  setUser={setUser}
                  addCourseToWishlist={addCourseToWishlist}
                  addCourseToAllCourses={addCourseToAllCourses}
                  addCourseToCart={addCourseToCart}
                />
              </Route>
              <Route
                path="/mycourses/:subsection"
                render={({ match }) => (
                  <MyCourses
                    featuredCourses={featuredCourses}
                    user={user}
                    setUser={setUser}
                    activeSection={match.params.subsection}
                    addCourseToCart={addCourseToCart}
                    addCourseToWishlist={addCourseToWishlist}
                  />
                )}
              ></Route>
              <Route path="/cart">
                <Cart
                  user={user}
                  setUser={setUser}
                  featuredCourses={featuredCourses}
                  addCourseToCart={addCourseToCart}
                  addCourseToWishlist={addCourseToWishlist}
                  addCourseToSaveforLaterList={addCourseToSaveforLaterList}
                />
              </Route>
              <Route
                path="/:genericSection"
                render={() => <InfoTemplate />}
              ></Route>
              <Route path="/">
                <Banner />
                <BenefitsContainer />
                <hr></hr>
                <FeaturedCourses
                  filteredCourses={filteredCourses}
                  featuredCourses={featuredCourses}
                  user={user}
                  setUser={setUser}
                  addCourseToWishlist={addCourseToWishlist}
                  addCourseToCart={addCourseToCart}
                />
              </Route>
            </Switch>
          </Layout>
        )}
      ></Route>
    </Router>
  );
}

export default App;
