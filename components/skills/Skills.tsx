"use client";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  DATABASE_SKILL,
  ARCHITECTURE_SKILL,
} from "@/constants";
import React, { useState, useEffect } from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden py-8 md:py-12"
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 md:gap-8 items-center">
        {FRONTEND_SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 md:gap-8 items-center">
        {BACKEND_SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 md:gap-8 items-center">
        {DATABASE_SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 md:gap-8 items-center">
        {ARCHITECTURE_SKILL.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={isSmallScreen ? image.width / 2 : image.width}
            height={isSmallScreen ? image.height / 2 : image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/animations/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
