import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center z-[20]"
      id="projects"
    >
      <h1 className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500">
        Mes derniers projets persos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-5 max-w-7xl my-2">
        <ProjectCard
          src="/projects/MoviesFinder.png"
          title="MoviesFinder"
          description="Application permettant de rechercher des films avec l'API OMDb. La recherche se lance seulement après 500ms d'inactivité de l'utilisateur, évitant ainsi de spammer l'API tout en offrant une expérience fluide."
          repoLink="https://github.com/RemiLisciandra/movies-project"
        />
        <ProjectCard
          src="/projects/ElevationGeneratorImage.png"
          title="ElevationGeneratorImage"
          description="Application permettant de modifier une image en ajoutant de l'ombrage, en arondissant les contours et en réduisant la taille. L'image peut ensuite être copier/coller ou télécharger."
          repoLink="https://github.com/RemiLisciandra/elevation-generator-image"
        />
        <ProjectCard
          src="/projects/AppleTimer.png"
          title="AppleTimer"
          description="Application permettant de lancer plusieurs minuteries simultanément, de les mettre en pause et de modifier facilement les durées."
          repoLink="https://github.com/RemiLisciandra/apple-timer"
        />
      </div>
    </div>
  );
};

export default Projects;
