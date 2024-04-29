'use client'
import * as React from "react";
import "../styles/nav.css";

function ResponsiveAppBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="wrapper">
          <div className="logo"><a href="./">PiAlert</a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><a href="./userLanding">Dashboard</a></li>
            <li><a href="./alerts">Alerts</a></li>
            <li><a href="./contact">Contact</a></li>
            <li>
        <a href="#" class="desktop-item">Account</a>
        <input type="checkbox" id="showDrop"></input>
        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
        <ul class="drop-menu">
          <li><a href="./account">View Account</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>
    </div>
  );
}

export default ResponsiveAppBar;
