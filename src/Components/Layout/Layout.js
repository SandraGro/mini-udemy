import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <>
        <Header
          history={this.props.props.history}
          user={this.props.user}
          featuredCourses={this.props.featuredCourses}
          searchCourse={this.props.searchCourse}
        />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Layout;
