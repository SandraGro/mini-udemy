import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import courseList from "../../Fixtures/CourseList.json";
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
    if (searchTerm.length < 2) {
      return [];
    }
    return Object.values(courseList).filter((courseItem) => {
      const { title, author, category } = courseItem;
      const concatenatedString = `${title} ${author} ${category}`.toLowerCase();
      return concatenatedString.includes(searchTerm);
    });
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
  it("should render suggestions when there is a search term in the input", async () => {
    //arrange
    const header = mount(
      <Router>
        <Header
          history={history}
          user={user}
          featuredCourses={featuredCourses}
          searchCourse={searchCourse}
        />
      </Router>
    );
    // Find the input and enter text

    //act
    //Checar porque llegan dos inputs, por qué no está corriendo el setState
    const eventObj = { target: { value: "photo" } };
    const input = header.find("input.search-input");
    const input2 = header.find("input.search-input");
    console.log(input2.debug());

    await input.simulate("change", eventObj);
    header.update();
    const suggestions = header.find("ul.visible.suggestion-box a");
    console.log(header.html());
    //assert
    expect(suggestions).toHaveLength(3);
  });
});
