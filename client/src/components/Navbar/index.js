
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  render() {
   
    return (
      this.props.location.pathname === "/Volunteer" ||this.props.location.pathname === "/UploadImage" ||this.props.location.pathname === "/" || this.props.location.pathname === "/Register" ? null :

      <nav className= "navbar navbar-expand fixed-bottom navbar-light">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/Home" className="nav-link">
                Home
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Connect" className="nav-link" activeClassName="active">
                Connect
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Services" className="nav-link" activeClassName="active">
                Services
            </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}



export default withRouter(Navbar);


