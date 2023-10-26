import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div id="sidebar-container" className="sidebar-container">
      <div className="sidebar-navigation-container">
        <div className="footer-section-heading">Navigation</div>
        <div className="navigation-divider"></div>
        <a href="#1">
          <h2>Home</h2>
        </a>
        <a href="#2">
          <h2>Work Experience</h2>
        </a>
        <a href="#3">
          <h2>Personal Projects</h2>
        </a>
        <a href="#4">
          <h2>About me</h2>
        </a>
        <a href="#5">
          <h2>Get in touch</h2>
        </a>
      </div>
      <div className="footer" style={{ marginLeft: "40px" }}>
        <div className="footer-section">
          <div className="footer-section-heading">SOCIALS</div>
          <div className="flex">
            <div
              onClick={() => window.open("http://github.com/sandeeptottadi")}
              className="footer-section-links"
            >
              Github
            </div>
            <div
              onClick={() =>
                window.open("https://www.linkedin.com/in/sandeeptottadi/")
              }
              className="footer-section-links"
            >
              LinkedIn
            </div>
            <div
              onClick={() => window.open("https://twitter.com/sandeeptottadi")}
              className="footer-section-links"
            >
              Twitter
            </div>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/sandeeptottadi/")
              }
              className="footer-section-links"
            >
              Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
