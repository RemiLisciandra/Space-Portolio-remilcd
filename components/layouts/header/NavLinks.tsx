"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { fadeInUp } from "@/utils/motion";

const NavLinks: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="hidden lg:flex w-[350px] h-full flex-row items-center justify-between lg:mr-15">
        <div className="flex items-center justify-between w-full h-auto text-lg">
          <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            animate="visible"
          >
            <NavLink href="#about-me" label="Qui suis-je ?" />
          </motion.div>
          <motion.div
            variants={fadeInUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            <NavLink href="#skills" label="Compétences" />
          </motion.div>
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            <NavLink href="#projects" label="Projets" />
          </motion.div>
        </div>
      </div>

      <div className="flex lg:hidden">
        <button
          onClick={handleToggleSidebar}
          className="text-green-500 focus:outline-none p-2"
        >
          {sidebarOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      <div
        className={`fixed left-0 w-64 bg-gray-900 text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            animate={sidebarOpen ? "visible" : "hidden"}
          >
            <NavLink href="#about-me" label="Qui suis-je ?" />
          </motion.div>
          <motion.div
            variants={fadeInUp(0.2)}
            initial="hidden"
            animate={sidebarOpen ? "visible" : "hidden"}
          >
            <NavLink href="#skills" label="Compétences" />
          </motion.div>
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate={sidebarOpen ? "visible" : "hidden"}
          >
            <NavLink href="#projects" label="Projets" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
