import React from "react";
import Logo from "../assets/images/verify-logo.svg"

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a href="/" className="navbar-item"><img src={Logo} alt="Autentia Verify" /></a>
              <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <i className="fas fa-shield-check has-text-primary fa-lg"></i>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Número de auditoría" />
                      </div>
                    </div>
                    <a href="/" type="submit" className="button is-primary">Verificar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;