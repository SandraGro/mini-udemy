import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import courseList from "../../Fixtures/CourseList.json";
import Cart from "./Cart";

describe("Cart component tests", () => {
  const user = {
    cart: [],
    myCourses: [],
    id: "user01",
    username: "Sandra",
  };
  const setUser = function setUser(user) {
    return;
  };
  const featuredCourses = [];
  const addCourseToCart = function addCourseToCart(
    slug,
    user,
    setUser,
    featuredCourses
  ) {
    return;
  };
  const addCourseToSaveforLaterList = function addCourseToSaveforLaterList(
    slug,
    user,
    setUser,
    featuredCourses,
    deleteIfMatches = true
  ) {
    return;
  };
  const addCourseToWishlist = function addCourseToWishlist(
    slug,
    user,
    setUser,
    featuredCourses,
    deleteIfMatches = true
  ) {
    return;
  };

  it("should render the correct messages when the cart is empty", () => {
    const cart = shallow(
      <Cart
        user={user}
        addCourseToCart={addCourseToCart}
        addCourseToSaveforLaterList={addCourseToSaveforLaterList}
        addCourseToWishlist={addCourseToWishlist}
        setUser={setUser}
        featuredCourses={featuredCourses}
      />
    );
    expect(toJson(cart)).toMatchSnapshot();
  });

  it("should render the course details from the courses in cart", () => {
    const course = courseList["course01"];
    const testUser = {
      ...user,
      // const course = courseList["course01"];
      cart: [course],
    };
    const cart = mount(
      <Router>
        <Cart
          user={testUser}
          addCourseToCart={addCourseToCart}
          addCourseToSaveforLaterList={addCourseToSaveforLaterList}
          addCourseToWishlist={addCourseToWishlist}
          setUser={setUser}
          featuredCourses={featuredCourses}
        />
      </Router>
    );
    const courseContainer = cart.find("div.course-container");
    const pricesContainer = cart.find("a.course-container");
    expect(courseContainer.html()).toMatch(`${course.title}`);
    expect(courseContainer.html()).toMatch(`${course.author}`);
    expect(courseContainer.html()).toMatch(`${course.thumbnail}`);
    expect(pricesContainer.html()).toMatch(`${course.originalPrice}`);
    expect(pricesContainer.html()).toMatch(`${course.discountedPrice}`);
    expect(pricesContainer.html()).not.toMatch(`${course.category}`);
  });

  it("should render the total price correctly", () => {
    const courses = [
      courseList["course01"],
      courseList["course02"],
      courseList["course03"],
    ];
    let totalPrice = 0;
    for (let i in courses) {
      totalPrice += parseInt(courses[i].discountedPrice);
    }
    const testUser = {
      ...user,
      cart: courses,
    };
    const cart = mount(
      <Router>
        <Cart
          user={testUser}
          addCourseToCart={addCourseToCart}
          addCourseToSaveforLaterList={addCourseToSaveforLaterList}
          addCourseToWishlist={addCourseToWishlist}
          setUser={setUser}
          featuredCourses={featuredCourses}
        />
      </Router>
    );
    const pricesContainer = cart.find("div.total-price");
    expect(pricesContainer.html()).not.toMatch("MXN$0");
    expect(pricesContainer.html()).toMatch(`MXN$${totalPrice}`);
  });

  it("should render the checkout button when there is a course in the cart", () => {
    const courses = [
      courseList["course01"],
      courseList["course02"],
      courseList["course03"],
    ];

    const testUser = {
      ...user,
      cart: courses,
    };
    const cart = mount(
      <Router>
        <Cart
          user={testUser}
          addCourseToCart={addCourseToCart}
          addCourseToSaveforLaterList={addCourseToSaveforLaterList}
          addCourseToWishlist={addCourseToWishlist}
          setUser={setUser}
          featuredCourses={featuredCourses}
        />
      </Router>
    );
    const pricesContainer = cart.find("div.total-price");
    expect(pricesContainer.html()).toMatch("Checkout");
  });
});
