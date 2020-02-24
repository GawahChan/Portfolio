import React from "react";
import ProjectsList from "./ProjectsList";
import { ProjectsContainer, ProjectsHeader, ProjectsParagraph } from "./styled";

function Projects() {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsHeader>My Projects</ProjectsHeader>
      <ProjectsParagraph>
        Feel free to check out some of my personal projects below!
      </ProjectsParagraph>
      <ProjectsList />
    </ProjectsContainer>
  );
}

export default Projects;
