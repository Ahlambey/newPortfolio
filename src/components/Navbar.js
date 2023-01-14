import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.svg";
import { isMobile } from "../utils/utils";

export default function Navbar({ currentElm }) {
  const [navBackground, setNavBackground] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);

  const toggleSidebar = () => {
    if (isMobile()) {
      setActiveSidebar(!activeSidebar);
      setCloseIcon(!closeIcon);
    }
  };

  const changeNavBackground = () => {
    if (window.scrollY >= 90) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  useEffect(() => {
  }, [currentElm]);

  return (
    <div className={navBackground ? "nav-container active" : "nav-container"}>
      <div className="Logo">
        <a href="#home">
          <img alt="logo" src={logo} />
        </a>
      </div>
      <div className={`${activeSidebar && "links-active"} links `}>
        <ul className="links-container">
          <li onClick={toggleSidebar} className="link-item">
            <a
              className={`${currentElm === "experience" && "active-element"}`}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li onClick={toggleSidebar} className="link-item">
            <a
              className={`${currentElm === "skills" && "active-element"}`}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li onClick={toggleSidebar} className="link-item">
            <a
              className={`${currentElm === "apps" && "active-element"}`}
              href="#apps"
            >
              Apps
            </a>{" "}
          </li>
          <li onClick={toggleSidebar} className="link-item">
            <a
              className={`${currentElm === "hobbies" && "active-element"}`}
              href="#hobbies"
            >
              About Me
            </a>
          </li>
          <li onClick={toggleSidebar} className={navBackground ? "contact-btn active" : "contact-btn"}>
            <a href="#contact">Contact Me</a>{" "}
          </li>
        </ul>
      </div>

      {/* toggler */}
      <div
        onClick={toggleSidebar}
        className={`${closeIcon && "nav-toggler-close"} nav-toggler`}
      >
        <div className="toggler-line1"></div>
        <div className="toggler-line2"></div>
        <div className="toggler-line3"></div>
      </div>
    </div>
  );
}
