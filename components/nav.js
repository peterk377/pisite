"use client";
import * as React from "react";
import "../styles/nav.css";
import cookies from "js-cookie";

const cookieAuth = cookies.get("auth");

function handleLogout() {
  // set Cookies to none
  cookies.remove("username");
  cookies.set("auth", "false");
}

function ResponsiveAppBar() {
  return (
    <header>
      <div className="navbar">
        <nav>
          <div className="wrapper">
            <div className="logo">
              <a href="./">PiAlert</a>
            </div>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                <i className="fas fa-times"></i>
              </label>
              <li>
                <a href="./userLanding">Dashboard</a>
              </li>
              <li>
                <a href="./alerts">Alerts</a>
              </li>
              <li>
                <a href="./contact">Contact</a>
              </li>
              {cookieAuth === "true" ? (
                <>
                  <li>
                    <a href="./account">View Account</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a href="./">Logout</a>
                  </li>
                </>
              ) : (
                // ELSE
                <>
                  <li>
                    <a href="./login">Log In</a>
                  </li>
                  <li>
                    <a href="./register">Register</a>
                  </li>
                </>
              )}
              {/* <li>
                <a href="#" className="desktop-item">
                  Account
                </a>
                <input type="checkbox" id="showDrop"></input>
                <label htmlFor="showDrop" className="mobile-item">
                  Dropdown Menu
                </label>
                <ul className="drop-menu"> */}
              {/* {cookieAuth === "true" ? (
                    <>
                      <li>
                        <a href="./account">View Account</a>
                      </li>
                      <li onClick={handleLogout}>
                        <a href="./">Logout</a>
                      </li>
                    </>
                  ) : (
                    // ELSE
                    <>
                      <li>
                        <a href="./login">Log In</a>
                      </li>
                      <li>
                        <a href="./register">Register</a>
                      </li>
                    </>
                  )} */}

              {/* checking for logged in  */}
              {/* </ul>
              </li> */}
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <i className="fas fa-bars"></i>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default ResponsiveAppBar;
