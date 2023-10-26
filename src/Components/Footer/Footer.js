import React, { useEffect } from "react";
import "./footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer(props) {
  const [main_ref, mainInView] = useInView();
  useEffect(() => {
    if (mainInView) {
      document.getElementById("footer-container").classList.add("footer-open");
      props.changeActivePage();
    } else {
      document
        .getElementById("footer-container")
        .classList.remove("footer-open");
    }
  }, [mainInView]);

  useEffect(() => {
    let btn = document.getElementById("contact-btn");
    let text = document.getElementById("contact-text");
    btn.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let btnWidth = btn.clientWidth;
      let btnHeight = btn.clientHeight;
      let moveX = x / 2 - btnWidth / 3;
      let moveY = y / 2 - btnHeight / 3;
      text.style.transform = `translateX(${moveX / 3}px) translateY(${
        moveY / 3
      }px)`;
      btn.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "";
      text.style.transform = "";
    });
  });

  function handShake() {
    document.getElementById("hands").classList.add("hand-shake");
  }
  return (
    <motion.div
      id="footer-container"
      ref={main_ref}
      className="footer-container"
    >
      <div className="footer-main">
        <h2>
          {" "}
          <span
            id="hands"
            onMouseOut={() => {
              document.getElementById("hands").classList.remove("hand-shake");
            }}
            onMouseOver={() => handShake()}
          >
            🤝
          </span>{" "}
          Let’s work together
        </h2>
        <div id="contact-btn" className="contact-btn">
          <span
            style={{ transition: "0.5s" }}
            id="contact-text"
            onClick={() => window.open(`mailto:sandeeptottadi@gmail.com`)}
          >
            Get in touch
          </span>
        </div>
        <div className="contact-btn-div"></div>
        <div className="contact-buttons">
          <div
            onClick={() => window.open(`mailto:sandeeptottadi@gmail.com`)}
            className="contact-button"
          >
            sandeeptottadi@gmail.com
          </div>
          <div className="contact-button">+91 9885666851</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-section">
            <div className="footer-section-heading">LOCAL TIME</div>
            <div>
              <span style={{ marginRight: "8px" }}>
                {new Date().toLocaleDateString("en-US", {
                  timeZone: "Asia/Kolkata",
                })}
              </span>
              {new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <div className="footer-section-heading">SOCIALS</div>
            <div className="flex">
              <div
                onClick={() => window.open("https://github.com/sandeeptottadi")}
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
                onClick={() =>
                  window.open("https://twitter.com/sandeeptottadi")
                }
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
    </motion.div>
  );
}
