"use client";

import React from "react";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  return (
    <div className="w-[350px] h-full flex flex-row items-center justify-between md:mr-15">
      <div className="flex items-center justify-between w-full h-auto">
        <NavLink href="#about-me" label="Qui suis-je ?" />
        <NavLink href="#skills" label="Compétences" />
        <NavLink href="#projects" label="Projets" />
      </div>
    </div>
  );
};

export default NavLinks;
