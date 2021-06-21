import React from "react";
import {
  ProjectCardContainer,
  Overlay,
  OverlayText,
  OverlayTitle,
  OverlaySubtitle,
  OverlayIcon,
} from "../styles/components/ProjectCard.styled";

function ProjectCard({ name, img, link, gitHub, description }) {
  return (
    <ProjectCardContainer img={img} target="_blank" rel="noopener noreferrer">
      <Overlay>
        <OverlayText href={link} target="_blank" rel="noopener noreferrer">
          <OverlayTitle>{name}</OverlayTitle>
          <OverlaySubtitle>{description}</OverlaySubtitle>
        </OverlayText>
        <OverlayIcon href={gitHub} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" />
        </OverlayIcon>
      </Overlay>
    </ProjectCardContainer>
  );
}

export default ProjectCard;
