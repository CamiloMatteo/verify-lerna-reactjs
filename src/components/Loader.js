import React, { Component } from "react";
import "../assets/styles/Loader.scss";

export default class Loader extends Component {
  render() {
    return (
      <div className="lds-dual-ring"></div>
    );
  }
}
