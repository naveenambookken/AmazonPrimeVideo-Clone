import React from "react";
import "./NavBar.css";
import logo from "../Images/Logo.png";
import searchbtn from "../Images/searchbtn.ico";
//import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="main-body">
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark bgcolor">
          <div className="prime-logo">
            <a href="/#">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className="nav-primary">
             <div className="left-section">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="active" aria-current="page" href="/#">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active" href="/#">
                    TV ShowsName
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active" href="/#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="active" href="/#">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
             <div className="right-section">
              <form className="search-box">
                <img className="search-button" src={searchbtn} alt="button" />
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
