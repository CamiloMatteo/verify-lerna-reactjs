import React from "react";
import Logo from "../assets/images/verify-logo.svg";
import AuditVerification from "../pages/AuditVerification";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setActive] = React.useState(false);
  
  return (
    <React.Fragment>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item"><img src={Logo} alt="Autentia Verify" /></Link>
            <button onClick={() => setActive(!isActive)} className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          
          <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <div className="navbar-item">
                <AuditVerification />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;