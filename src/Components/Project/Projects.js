import React, { useEffect } from "react";
import "./projects.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "./ProjectCarousel";

export default function Projects(props) {
  const [main_ref, mainInView] = useInView();

  useEffect(() => {
    if (mainInView) {
      props.changeActivePage();
    }
  }, [mainInView]);

  return (
    <motion.div ref={main_ref} className="project-container">
      <p class="ribbon">
        <span class="text">
          <strong class="bold">Personal Projects (2)</strong>
        </span>
      </p>
      <Carousel />
    </motion.div>
  );
}
