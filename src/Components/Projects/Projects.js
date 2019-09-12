import React from 'react';
import ProjectList from './ProjectsList';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects-container" id="Projects">
            <h1>My Projects</h1>
            <div className="Projects-list">
                {
                    ProjectList.map(project => {
                        return (
                            <div className={`Projects-item ${project.className}`}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="Overlay">
                                        <h2>{project.name}</h2>
                                        <p>{project.description}</p>
                                        <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                                            <i class="fab fa-github fa-3x" />
                                        </a>
                                        
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Projects;