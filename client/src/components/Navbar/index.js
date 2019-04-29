import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (

<nav className="navbar navbar-expand navbar-light bg-light">
      {/* <ul className="navbar-brand">
      <Link  
      to="/">
      <img src="./logo.png" alt="" style={{width: '40px'}} />
      </Link>
      </ul> */}
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