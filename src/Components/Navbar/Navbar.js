import React, { useState } from "react";
import Accordian from "../Accordian/Accordian.js";
import logo from "./logo-dark.png";
import "./Navbar.css";
import sidebarLogo from "./side-nav-logo-1.png";
import sidebarCloseLogo from "./side-nav-logo-2.png";

function Navbar() {
  const [navbarChange, setNavbarChange] = useState(false);
  const [navLinkHoverOne, setNavLinkHoverOne] = useState(false);
  const [navLinkHoverTwo, setNavLinkHoverTwo] = useState(false);
  const [navLinkHoverThree, setNavLinkHoverThree] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAccord, setShowAccord] = useState(false);
  const [toTopVisible, setToTopVisible] = useState(false);

  function changesOnScreen() {
    if (window.scrollY > 20) {
      setNavbarChange(true);
      setToTopVisible(true);
    } else {
      setNavbarChange(false);
      setToTopVisible(false);
    }
  }
  window.addEventListener("scroll", changesOnScreen);

  function onNavLinkHoverOne(e) {
    setNavLinkHoverOne(!navLinkHoverOne);
  }
  function onNavLinkHoverTwo(e) {
    setNavLinkHoverTwo(!navLinkHoverTwo);
  }
  function onNavLinkHoverThree(e) {
    setNavLinkHoverThree(!navLinkHoverThree);
  }

  function sideBar() {
    setShowSideBar(!showSideBar);
  }

  function accordShow() {
    setShowAccord(!showAccord);
  }
  return (
    <div>
      <div className="navbar-top">
        <div className="top-nav-content">
          <div className="top-nav-left">
            <div className="top-nav-mail">
              <i className="fas fa-envelope"></i>
              <a href="/">admission@hicoder.in</a>
            </div>
            <div className="top-nav-phone">
              <i className="fas fa-phone-volume"></i>
              <a href="tel:(+91) 9206 980 980">(+91) 9206 980 980</a>
            </div>
          </div>
          <div className="top-nav-right">
            <div className="top-nav-time">
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 10:00am - 06.00pm</span>
            </div>
            <div className="top-nav-socials">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={navbarChange ? "navbar heightChange" : "navbar"}>
        <div className="inner-nav">
          <div className="logo-div">
            <img className="logo" src={logo} alt="HiCode Logo" />
          </div>
          <button className="small-screen-burger-btn" onClick={accordShow}>
            <div className="small-screen-burger">
              <i className="fas fa-bars"></i>
            </div>
          </button>

          <div className="navbar-links">
            <div
              className="p-three"
              onMouseEnter={onNavLinkHoverOne}
              onMouseLeave={onNavLinkHoverOne}
            >
              <p className="nav-links-p">
                HiCoder {navLinkHoverOne ? "-" : "+"}{" "}
              </p>
              <div className={navLinkHoverOne ? " drop" : "drop dropdown-one"}>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
              </div>
            </div>
            <div
              className="p-three"
              onMouseEnter={onNavLinkHoverTwo}
              onMouseLeave={onNavLinkHoverTwo}
            >
              <p className="nav-links-p">
                Course {navLinkHoverTwo ? "-" : "+"}
              </p>

              <div className={navLinkHoverTwo ? " drop" : "drop dropdown-two"}>
                <a href="/">What you learn?</a>
                <a href="/">How to apply?</a>
                <a href="/">Fee Structure</a>
                <a href="/">Apply</a>
              </div>
            </div>
            <div
              className="p-three"
              onMouseEnter={onNavLinkHoverThree}
              onMouseLeave={onNavLinkHoverThree}
            >
              <p className="nav-links-p">
                Hire {navLinkHoverThree ? "-" : "+"}
              </p>
              <div
                className={navLinkHoverThree ? " drop" : "drop dropdown-three"}
              >
                <a href="/">Hire</a>
              </div>
            </div>
            <a href="/">
              <button className="apply-now">Apply Now</button>
            </a>
            <button className="side-bar-btn-open">
              <img
                className="side-bar-logo"
                src={sidebarLogo}
                alt="side bar logo"
                onClick={sideBar}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={showSideBar ? "side-nav show" : "side-nav "}>
        <button className="side-bar-close-logo-btn" onClick={sideBar}>
          <img className="side-bar-close-logo" src={sidebarCloseLogo} alt="" />
        </button>
        <img className="side-bar-comp-logo" src={logo} alt="" />
        <p className="side-bar-text">
          HiCoder enables students in being capable to develop production grade
          application by availing full stack development, Soft skills, Analytics
          and project management skills to get a core software job in the
          Industry.
        </p>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
            India, PIN: 500033
          </p>
        </div>
        <div className="phone">
          <i className="fas fa-phone-volume"></i>
          <p>(+91) 9206 980 980</p>
        </div>
        <div className="mail">
          <i className="fas fa-envelope"></i>
          <p>admission@hicoder.in</p>
        </div>
        <div className="clock">
          <i className="fas fa-clock"></i>
          <p>10:00AM - 06:00PM</p>
        </div>

        <div className="social-logo">
          <a href="/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className={"accordian-nav"}>
        <Accordian accordianShow={showAccord} />
      </div>
      <div className={toTopVisible===true ? "toTop" : "toTop hidden"}>
        <a href="#homepage-section"><i class="fas fa-chevron-up" style={{color: "white"}}></i></a>
      </div>
      <div className="page"></div>
    </div>
  );
}

export default Navbar;
