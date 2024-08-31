"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectsContainerProps {
  children: React.ReactNode;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ children }) => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="flex flex-col items-center justify-center z-[20]"
      id="projects"
    >
      <motion.h1
        ref={titleRef}
        className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500"
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Mes derniers projets persos
      </motion.h1>
      {children}
    </div>
  );
};

export default ProjectsContainer;
