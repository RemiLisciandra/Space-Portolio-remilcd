"use client";

import React from "react";
import { motion } from "framer-motion";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  onClick?: () => void;
  delay: number;
  inView: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  name,
  url,
  icon,
  onClick,
  delay,
  inView,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      onClick={onClick}
      className="relative flex flex-row items-start justify-center cursor-pointer group my-2 z-[20]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {icon}
      <span className="text-base ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 relative">
        {name}
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-500 group-hover:w-full"></span>
      </span>
    </motion.a>
  );
};

export default SocialLink;
