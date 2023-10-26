import React, { useEffect } from "react";
import "./about_me.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import profile_icon from "../../Images/profile_icon.png";
import react from "../../Images/react.png";
import node from "../../Images/node.png";
import mongodb from "../../Images/mongodb.png";
import express from "../../Images/express.png";

export default function About_me(props) {
  const [main_ref, mainInView] = useInView();
  const animate_main_title = useAnimation();
  const animate_project_image = useAnimation();

  useEffect(() => {
    if (mainInView) {
      props.changeActivePage();
      animate_main_title.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
      animate_project_image.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
    } else {
      animate_main_title.start({
        x: -100,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
      animate_project_image.start({
        x: 100,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
  }, [mainInView]);

  useEffect(() => {
    let btn = document.getElementById("connect-btn");
    let text = document.getElementById("connect-text");
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

  function Hurray() {
    for (let i = 0; i < 30; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      document.getElementById(
        `bubble-${i}`
      ).style.backgroundColor = `rgb(${r},${g},${b})`;
    }
  }
  function resetColors() {
    for (let i = 0; i < 30; i++) {
      document.getElementById(
        `bubble-${i}`
      ).style.backgroundColor = `rgb(${255},${255},${255})`;
    }
  }
  return (
    <motion.div ref={main_ref} className="about-container">
      <motion.section className="about-sub-container">
        <motion.div className="about-title">
          <div className="about_me">About me</div>
          <div className="about-info">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </div>
          <div>
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
          <div
            id="connect-btn"
            className="connect-btn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/sandeeptottadi/")
            }
          >
            <span style={{ transition: "0.5s" }} id="connect-text">
              Connect
            </span>
          </div>
          <div className="btn-div"></div>
        </motion.div>
        <div className="about-img-container">
          <div className="about-img-sub-container">
            <motion.img
              alt="sandeep tottadi"
              src={profile_icon}
              className="profile-picture"
            ></motion.img>
            <div
              title="Hi!"
              onMouseOver={() => Hurray()}
              onMouseOut={() => resetColors()}
              className="hi-emoji"
            >
              👋
            </div>
            {/* cube */}
            <div class="cube">
              <div class="face front">
                <img src={react} alt="react" />
              </div>
              <div class="face back">
                <img src={node} alt="node" />
              </div>
              <div class="face left">
                <img src={mongodb} alt="mongodb" />
              </div>
              <div class="face right">
                <img src={express} alt="express" />
              </div>
              <div class="face top"></div>
              <div class="face bottom"></div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
