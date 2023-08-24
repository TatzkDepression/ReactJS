import React, { Component } from "react";
//rcc
export default class DataBinding extends Component {
  user = "Alice Nguyễn";
  renderCard = () => {
    return (
      <div className="card text-left w-25">
        <div>
          <img className="card-img-top" src="./logo512.png" alt />
          <div className="card-body">
            <h4 className="card-title">{this.user}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  };
  render() {
    let title = "Welcome to BC56";
    return (
      <div>
        <h2>DataBinding</h2>
        <h3>{title}</h3>
        <h2>{this.user}</h2>
        <div>{this.renderCard()}</div>
      </div>
    );
  }
}
