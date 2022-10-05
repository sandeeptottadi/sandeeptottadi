import React, { useEffect } from "react";
import "./about_me.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation, useScroll } from "framer-motion";

export default function About_me() {
  const [main_ref, mainInView] = useInView();
  const animate_main_title = useAnimation();
  const animate_project_image = useAnimation();

  useEffect(() => {
    if (mainInView) {
      animate_main_title.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      animate_project_image.start({
        x: 1000,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    } else {
      animate_main_title.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      animate_project_image.start({
        x: -100,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    }
  }, [mainInView]);
  return (
    <motion.div className="about-container">
      <motion.section ref={main_ref}>
        <div className="about-img">
          <motion.div
            animate={animate_project_image}
            className="project-image"
          ></motion.div>
        </div>
        <motion.div animate={animate_main_title} className="about-title">
          <div className="about_me">About me</div>
          <div className="about-name">Pathfinding Visualizer</div>
          <div>
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
          <div className="about">website</div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
