import React from "react";
import "./navbar.css";
import logo from "../images/srelogo.png";
function Navbar() {
  return (
    <div>
      <nav id="navigation" className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SHREE RAM ENTERPRISES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  WALL TILES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  FLOAR TILES 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#educations">
                  ABOUT US 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
