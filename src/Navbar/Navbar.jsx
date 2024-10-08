import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/srelogo.png";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Navbar() {
  function TopFunc () {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <nav id="navigation" className="navbar fixed-top navbar-expand-lg">
        {/* <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            SHREE RAM ENTERPRISES
          </Link>
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
                <Link 
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >

                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/walltiles">
                  WALL TILES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/floartiles">
                  FLOAR TILES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  ABOUT US
                </Link>
              </li>
         
            </ul>
          </div>
        </div> */}
        <nav className="navbar navbar-dark bg-black fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shree Ram Enterprisess</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Shree Ram Enterprisess</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      
              <li className="nav-item" onClick={TopFunc} data-bs-dismiss="offcanvas" aria-label="Close">
                <Link 
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >

                  HOME
                </Link>
              </li>
              <li className="nav-item" onClick={TopFunc} data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link" to="/walltiles">
                  WALL TILES
                </Link>
              </li>
              <li className="nav-item" onClick={TopFunc} data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link" to="/floartiles" >
                  FLOAR TILES
                </Link>
              </li>
              <li className="nav-item" onClick={TopFunc} data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link" to="/aboutus" >
                  ABOUT US
                </Link>
              </li>
         
            </ul>
  
      
      
      </div>
    </div>
  </div>
</nav>
      </nav>
    </div>
  );
}

export default Navbar;
