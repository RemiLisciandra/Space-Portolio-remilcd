"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectList from "./ProjectList";

const Projects: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      src: "/projects/MoviesFinder.png",
      title: "MoviesFinder",
      description:
        "Application permettant de rechercher des films avec l'API OMDb. La recherche se lance seulement après 500ms d'inactivité de l'utilisateur, évitant ainsi de spammer l'API tout en offrant une expérience fluide.",
      repoLink: "https://github.com/RemiLisciandra/movies-project",
    },
    {
      src: "/projects/ElevationGeneratorImage.png",
      title: "ElevationGeneratorImage",
      description:
        "Application permettant de modifier une image en ajoutant de l'ombrage, en arrondissant les contours et en réduisant la taille. L'image peut ensuite être copiée/collée ou téléchargée.",
      repoLink: "https://github.com/RemiLisciandra/elevation-generator-image",
    },
    {
      src: "/projects/AppleTimer.png",
      title: "AppleTimer",
      description:
        "Application permettant de lancer plusieurs minuteries simultanément, de les mettre en pause et de modifier facilement les durées. Stockage des données des minuteurs dans la mémoire locale du navigateur.",
      repoLink: "https://github.com/RemiLisciandra/apple-timer",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center z-[20]"
      id="projects"
    >
      <motion.h1
        ref={titleRef}
        className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500"
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Mes derniers projets persos
      </motion.h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
