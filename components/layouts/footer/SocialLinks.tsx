import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const handleMailClick = () => {
    toast.info("Préparation de l'e-mail en cours...", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const links = [
    {
      name: "LinkedIn",
      icon: <RxLinkedinLogo className="text-[24px] text-white" />,
      url: "https://www.linkedin.com/in/r%C3%A9mi-lisciandra-020887206",
    },
    {
      name: "GitHub",
      icon: <RxGithubLogo className="text-[24px] text-white" />,
      url: "https://github.com/RemiLisciandra",
    },
    {
      name: "remi.lisciandra@icloud.com",
      icon: <HiOutlineMail className="text-[24px] text-white" />,
      url: "mailto:remi.lisciandra@icloud.com",
      onClick: handleMailClick,
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: linksRef, inView: linksInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
      <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-4">
        <motion.h1
          ref={titleRef}
          className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500 z-[20]"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Me contacter
        </motion.h1>
        <div ref={linksRef}>
          {links.map((link, index) => (
            <SocialLink
              key={index}
              name={link.name}
              url={link.url}
              icon={link.icon}
              onClick={link.onClick}
              delay={index * 0.2}
              inView={linksInView}
            />
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SocialLinks;
