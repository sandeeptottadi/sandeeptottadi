import React, { useEffect } from "react";
import "./projects.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation, useScroll } from "framer-motion";
import Project_image from "./project.jpeg";

export default function Projects() {
  const [main_ref, mainInView] = useInView();
  const animate_main_title = useAnimation();
  const animate_project_image = useAnimation();
  const animate_p_i = useAnimation();
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
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      animate_p_i.start({
        x: 0,
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
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      animate_p_i.start({
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
    <motion.div id="projects" className="project-container">
      <motion.section className="project-section" ref={main_ref}>
        <motion.div animate={animate_main_title} className="project-title">
          <div className="project-name">Pathfinding Visualizer</div>
          <div>
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
          <div className="about">website</div>
          <button className="project-btn">Show more</button>
        </motion.div>
        <motion.div animate={animate_project_image} className="project-img">
          <div className="project-image"></div>
          <motion.div animate={animate_p_i} className="project-i"></motion.div>
          <img className="p-img" src={Project_image}></img>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
