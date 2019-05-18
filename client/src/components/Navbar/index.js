
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import axios from "axios";
import "./style.css";

class Navbar extends Component {

  handleLogout() {
    axios.get("/api/logout")
      .then((res) => {
        window.location.assign("/")
      })
  }

  render() {

    return (
      this.props.location.pathname === "/Volunteer" || this.props.location.pathname === "/UploadImage" || this.props.location.pathname === "/" || this.props.location.pathname === "/Register" ? null :

        <nav className="navbar navbar-expand fixed-bottom navbar-light">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/Home" className="nav-link">
                  <FormattedMessage id="navbar.home" defaultMessage="Home" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Connect" className="nav-link" activeClassName="active">
                  <FormattedMessage id="navbar.connect" defaultMessage="Connect" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Services" className="nav-link" activeClassName="active">
                  <FormattedMessage id="navbar.services" defaultMessage="Services" />
                </NavLink>
              </li>
              <li className="nav-item">
              {" "}
                <a className="nav-link" href="#" onClick={this.handleLogout}>
                <i class="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

    )
  }
}



export default withRouter(Navbar);


