import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <>
        <Header user={this.props.user} featuredCourses={this.props.featuredCourses} />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Layout;
