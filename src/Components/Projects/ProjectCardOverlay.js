import React from 'react';

import { Overlay, OverlayTitle, OverlaySubtitle, OverlayIcon } from './styled';

function ProjectCardOverlay({ project }) {
    return (
        <Overlay>
            <OverlayTitle>{project.name}</OverlayTitle>
            <OverlaySubtitle>{project.description}</OverlaySubtitle>
            <OverlayIcon href={project.gitHub} target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-3x" />
            </OverlayIcon>
        </Overlay>
    )
}

export default ProjectCardOverlay;