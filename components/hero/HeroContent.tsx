"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 lg:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[4px] lg:py-[8px] px-[2px] lg:px-[7px] border border-cyan-500 opacity-[0.9]"
        >
          <SparklesIcon className="text-green-400 mr-[5px] lg:mr-[10px] h-4 lg:h-5 w-4 lg:w-5" />
          <h1 className="Welcome-text text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
            Portfolio basé sur un projet original, modifié par Rémi LCD
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <p className="whitespace-nowrap">Développeur&nbsp;Full&nbsp;Stack</p>
          <p className="whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500">
              React
            </span>
            &nbsp;et&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-cyan-500">
              Symfony
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-sm lg:text-lg text-gray-400 mb-3 lg:mb-5 max-w-[600px]"
        >
          <p>
            Hello, je m&apos;appelle Rémi. J&apos;ai 22 ans et je suis
            développeur depuis 5 ans, avec une forte préférence pour le
            développement backend.
          </p>
          <p>
            J&apos;ai 2 ans d&apos;expérience avec Symfony et 1 an avec React.
          </p>
          <p className="mt-2">
            React me permet de créer des applications ergonomiques, en offrant
            une très bonne UI/UX.
          </p>
          <p>
            Symfony me permet de gérer la partie serveur de manière efficace,
            notamment en créant et en gérant des API robustes.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full h-full justify-center items-center"
      >
        <Image
          src="/me/me.png"
          alt="profile-picture"
          height={350}
          width={350}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
