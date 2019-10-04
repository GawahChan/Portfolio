import React from 'react';
import ProjectCard from './ProjectCard';

import {ProjectsListContainer} from './styled';
import Data from './Data';

function ProjectsList() {
    return (
        <ProjectsListContainer>
            {
                Data.map(project => {
                    return (
                        <ProjectCard project={project} />
                    );
                })
            }
        </ProjectsListContainer>
    )
}

export default ProjectsList;