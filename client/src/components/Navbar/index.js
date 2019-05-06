import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (

<nav className="navbar navbar-expand fixed-bottom navbar-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              About
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

  );
}


export default Navbar;