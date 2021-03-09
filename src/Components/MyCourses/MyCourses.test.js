import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import courseList from "../../Fixtures/CourseList.json";
import MyCourses from "./MyCourses";

describe("MyCourses component tests", () => {
  const user = {
    cart: [],
    myCourses: [courseList["course01"]],
    wishlistCourses: [courseList["course02"]],
    id: "user01",
    username: "Sandra",
  };
  const setUser = function setUser(user) {
    return;
  };
  const activeSection = "learning";
  const featuredCourses = [];
  const addCourseToCart = function addCourseToCart(
    slug,
    user,
    setUser,
    featuredCourses
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

  it("should render tabs correctly", () => {
    const myCourses = shallow(
      <MyCourses
        user={user}
        addCourseToCart={addCourseToCart}
        addCourseToWishlist={addCourseToWishlist}
        setUser={setUser}
        featuredCourses={featuredCourses}
        activeSection={activeSection}
      />
    );
    expect(toJson(myCourses)).toMatchSnapshot();
  });

  it("should render the correct tab when is selected", () => {
    //arrange
    const myCourses = mount(
      <Router>
        <MyCourses
          user={user}
          addCourseToCart={addCourseToCart}
          addCourseToWishlist={addCourseToWishlist}
          setUser={setUser}
          featuredCourses={featuredCourses}
          activeSection={activeSection}
        />
      </Router>
    );

    //act
    const tab = myCourses.find(".nav-tabs a.nav-link").at(1);
    console.log(tab.debug());
    expect(myCourses.html()).toMatch("The Complete Foundation Stock Trading Course");
    expect(myCourses.html()).not.toMatch("Photography Beginners: DSLR Photography Camera Settings");
    tab.simulate("click");
    tab.update();
    //assert
    expect(myCourses.html()).not.toMatch("The Complete Foundation Stock Trading Course");
    expect(myCourses.html()).toMatch("Photography Beginners: DSLR Photography Camera Settings");

  });
});
