import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../assets/styles/App.scss"

const Layout = (props) => (
  <React.Fragment>
      <Navbar/>
      <div className="container container-main">
        { props.children }
      </div>
      <Footer/>
  </React.Fragment>
)

export default  Layout;
