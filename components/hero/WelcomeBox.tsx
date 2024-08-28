"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const WelcomeBox = () => {
  return (
    <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[4px] lg:py-[8px] px-[2px] lg:px-[7px] border border-cyan-500 opacity-[0.9]"
    >
      <SparklesIcon className="text-green-400 mr-[5px] lg:mr-[10px] h-4 lg:h-5 w-4 lg:w-5" />
      <h1 className="Welcome-text text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
        Portfolio basé sur un projet original, modifié par Rémi LCD
      </h1>
    </motion.div>
  );
};

export default WelcomeBox;
