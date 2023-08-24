import React, { Component } from "react";
import { listMovie } from "./data";

export default class RenderWithMap extends Component {
  renderListMovie = () => {
    // style chứa object
    return listMovie.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card text-left">
            <img
              style={{ height: "300px", borderRadius: "30px" }}
              className="card-img-top"
              src={item.hinhAnh}
              alt=""
            />
            <div className="card-body">
              <p className="card-title">{item.tenPhim}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h2>Render with map</h2>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
