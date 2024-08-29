"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  src: string;
  title: string;
  description: string;
  repoLink: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-5 max-w-7xl mt-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          src={project.src}
          title={project.title}
          description={project.description}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
