import React from "react";
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsParagraph,
  ProjectsListContainer,
} from "../styles/components/Projects.styled";
import Data from "../helpers/Data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsHeader>My Projects</ProjectsHeader>
      <ProjectsParagraph>
        Feel free to check out some of my personal projects below!
      </ProjectsParagraph>
      <ProjectsListContainer>
        {Data.map((project, id) => {
          return (
            <ProjectCard
              key={id}
              name={project.name}
              img={project.img}
              link={project.link}
              gitHub={project.gitHub}
              description={project.description}
            />
          );
        })}
      </ProjectsListContainer>
    </ProjectsContainer>
  );
}

export default Projects;
