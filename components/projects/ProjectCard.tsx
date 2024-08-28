"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  repoLink: string;
}

const ProjectCard = ({ src, title, description, repoLink }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: "easeOut" };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="relative overflow-hidden rounded-lg shadow-lg p-1 bg-gradient-to-r from-green-500 to-cyan-500 w-full sm:w-80 md:w-96 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500"
    >
      <div className="bg-gray-800 rounded-lg flex flex-col h-full w-full">
        <div className="flex-grow flex items-center justify-center p-4">
          <Image
            src={src}
            alt={title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="p-4 text-center flex flex-col items-center h-[250px]">
          <h1 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500">
            {title}
          </h1>
          <p className="mt-2 text-gray-300 text-xs sm:text-sm md:text-base">
            {description}
          </p>
          <a
            href={repoLink}
            target="_blank"
            className="mt-auto inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-500 text-white font-medium py-2 px-3 sm:px-4 rounded hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500 text-sm sm:text-base"
          >
            Voir le code source
            <RxGithubLogo className="text-[20px] sm:text-[24px] ms-2 flex-shrink-0" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
