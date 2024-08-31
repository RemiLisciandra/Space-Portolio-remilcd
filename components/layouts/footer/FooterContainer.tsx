"use client";

import React, { ReactNode } from "react";

interface FooterContainerProps {
  children: ReactNode;
}

const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
  return (
    <div
      className="w-full h-full bg-transparent text-gray-200 shadow-lg z-[20]"
      id="contact-me"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {children}
      </div>
    </div>
  );
};

export default FooterContainer;
