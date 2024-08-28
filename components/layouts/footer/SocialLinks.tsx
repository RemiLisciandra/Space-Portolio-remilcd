"use client";

import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      icon: <RxLinkedinLogo className="text-[24px]" />,
      url: "https://www.linkedin.com/in/r%C3%A9mi-lisciandra-020887206",
    },
    {
      name: "GitHub",
      icon: <RxGithubLogo className="text-[24px]" />,
      url: "https://github.com/RemiLisciandra",
    },
    {
      name: "remi.lisciandra@icloud.com",
      icon: <HiOutlineMail className="text-[24px]" />,
      url: "mailto:remi.lisciandra@icloud.com",
      onClick: () => toast.info("Préparation de l'e-mail en cours..."),
    },
  ];

  return (
    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[20]">
      <h1 className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500">
        Me contacter
      </h1>
      {links.map((link, index) => (
        <a
          key={index}
          href={link?.url}
          target="_blank"
          onClick={link?.onClick}
          className="relative flex flex-row items-start justify-center cursor-pointer group z-[20] my-2"
        >
          {link?.icon}
          <span className="text-base ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 relative">
            {link?.name}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-500 group-hover:w-full"></span>
          </span>
        </a>
      ))}
      <ToastContainer />
    </div>
  );
};

export default SocialLinks;
