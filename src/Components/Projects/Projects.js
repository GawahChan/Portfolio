import React from 'react';
import ProjectsList from './ProjectsList';
import {ProjectsContainer, ProjectsHeader} from './styled';

function Projects() {
    return (
        <ProjectsContainer id="Projects">
            <ProjectsHeader>My Projects</ProjectsHeader>
            <ProjectsList />
        </ProjectsContainer>
    );
}

export default Projects;