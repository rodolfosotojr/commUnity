import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

<nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      <img src="./src/Images/CommUnity copy 2.png" alt="logo" />
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Connect"
              className={window.location.pathname === "/Connect" 
              ? "nav-link active" 
              : "nav-link"}
            >
              Connect
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Services"
              className={window.location.pathname === "/Services" 
              ? "nav-link active" 
              : "nav-link"}
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}


export default Navbar;