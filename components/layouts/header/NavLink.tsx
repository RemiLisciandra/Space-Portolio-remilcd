"use client";

import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="relative flex flex-row items-center justify-center cursor-pointer group z-[20] mx-[10px]"
    >
      <span className="text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-500 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;
