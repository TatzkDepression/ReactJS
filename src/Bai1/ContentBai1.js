import React, { Component } from "react";
import Features1 from "./Features1";
import Features2 from "./Features2";
import Features3 from "./Features3";
import Features4 from "./Features4";
import Features5 from "./Features5";
import Features6 from "./Features6";

export default class ContentBai1 extends Component {
  render() {
    return (
      <div>
        <section className="pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              <Features1 />
              <Features2 />
              <Features3 />
              <Features4 />
              <Features5 />
              <Features6 />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
