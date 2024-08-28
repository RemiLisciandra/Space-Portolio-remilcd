"use client";

import React from "react";
import HeroContent from "./HeroContent";
import BlackHoleVideo from "./BlackHoleVideo";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <BlackHoleVideo />
      <HeroContent />
    </div>
  );
};

export default Hero;
