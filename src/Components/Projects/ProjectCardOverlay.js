import React from 'react';

import { Overlay, OverlayText, OverlayTitle, OverlaySubtitle, OverlayIcon } from './styled';

function ProjectCardOverlay({ project }) {
    return (
        <Overlay>
            <OverlayText href={project.link} target="_blank" rel="noopener noreferrer">
                <OverlayTitle>{project.name}</OverlayTitle>
                <OverlaySubtitle>{project.description}</OverlaySubtitle>
            </OverlayText>
            <OverlayIcon href={project.gitHub} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-3x" />
            </OverlayIcon>
        </Overlay>
    )
}

export default ProjectCardOverlay;