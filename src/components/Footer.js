import React from "react";
import Logo from "../assets/images/autentia-logo.svg"

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <img src={Logo} alt="Autentia Logo" className="logo-footer mx-auto" />
      <small>Copyright 2019</small>
    </div>
  </footer>
);

export default Footer;