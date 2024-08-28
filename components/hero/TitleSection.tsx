"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const TitleSection = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
    >
      <p className="whitespace-nowrap">Développeur&nbsp;Full&nbsp;Stack</p>
      <p className="whitespace-nowrap">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500">
          React
        </span>
        /
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-cyan-500">
          Symfony
        </span>
      </p>
    </motion.div>
  );
};

export default TitleSection;
