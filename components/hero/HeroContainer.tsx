"use client";

import React, { ReactNode } from "react";

interface HeroContainerProps {
  children: ReactNode;
}

const HeroContainer: React.FC<HeroContainerProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {children}
    </div>
  );
};

export default HeroContainer;
