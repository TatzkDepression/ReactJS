import React, { Component } from "react";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <Nav />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}
