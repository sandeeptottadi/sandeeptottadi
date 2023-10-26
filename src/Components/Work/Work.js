import React, { useEffect } from "react";
import "./work.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "./WorkCarousel";

export default function Work(props) {
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
          <strong class="bold">Work Experience (1)</strong>
        </span>
      </p>
      <Carousel />
    </motion.div>
  );
}
