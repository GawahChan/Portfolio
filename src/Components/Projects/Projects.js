import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects-container" id="Projects">
            <h1>My Projects</h1>
            <div className="Projects-list">
                <div className="Projects-item kodflix">
                    <a href="https://kodflix.appspot.com/" target="_blank" rel="noopener noreferrer">
                        <div className="Overlay">
                            <h2>Kodflix</h2>
                            <p>A netflix inspired web app</p>
                        </div>
                    </a>
                </div>
                <div className="Projects-item alpha-props">
                    <a href="https://alpha-properties-app.appspot.com/" target="_blank" rel="noopener noreferrer">
                        <div className="Overlay">
                            <h2>Alpha-Properties</h2>
                            <p>A mock real-estate agency website based on properties in London </p>
                        </div>
                    </a>
                </div>
                <div className="Projects-item other-projects">
                    <a href="https://github.com/GawahChan" target="_blank" rel="noopener noreferrer">
                        <div className="Overlay">
                            <h2>Check out my GitHub!</h2>
                            <i class="fab fa-github fa-3x" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;