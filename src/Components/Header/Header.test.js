import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";

import Header from "./Header";

describe("Header component tests", () => {
  const user = {
    cart: [],
    myCourses: [],
    id: "user01",
    username: "Sandra",
  };
  const featuredCourses = [];
  const searchCourse = function searchCourse(searchTerm) {
    return [];
  };
  const history = { push: function push() {} };
  it("should render correctly", () => {
    const header = shallow(
      <Router>
        <Header
          history={history}
          user={user}
          featuredCourses={featuredCourses}
          searchCourse={searchCourse}
        />
      </Router>
    );
    expect(toJson(header)).toMatchSnapshot();
  });
  it("should render the correct count on the cart icon", () => {
      //arrange
    const testUser = {
      ...user,
      cart: [
        { title: "title1", author: "author1" },
        { title: "title2", author: "author2" },
        { title: "title3", author: "author3" },
      ],
    };
    const header = mount(
      <Router>
        <Header
          history={history}
          user={testUser}
          featuredCourses={featuredCourses}
          searchCourse={searchCourse}
        />
      </Router>
    );
    // Find badge element and get HTML
    // Make sure that selector returns an element so HTML function works

    //act
    const badge = header.find(".badge.badge-danger");
    //assert
    expect(badge.html()).toBe(`<span class="badge badge-danger">3</span>`);
  });
});
