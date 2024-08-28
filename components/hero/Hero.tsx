"use client";

import React from "react";
import HeroContent from "./HeroContent";
import BlackHoleVideo from "../layouts/BlackHoleVideo";
import HeroContainer from "./HeroContainer";

const Hero = () => {
  return (
    <HeroContainer>
      <BlackHoleVideo />
      <HeroContent />
    </HeroContainer>
  );
};

export default Hero;
