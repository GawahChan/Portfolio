import React from 'react';
import Kodflix from '../../common/images/Kodflix.JPG';
import AlphaProps from '../../common/images/Alpha-props.JPG';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects-container" id="Projects">
            <h1>My Projects</h1>
            <div className="Projects-list">
                <div className="Projects-item">
                    <img src={Kodflix} alt="Kodflix Project"/>
                    <h2>Kodflix</h2>
                </div>
                <div className="Projects-item">
                    <img src={AlphaProps} alt="Alpha-Props Project"/>
                    <h2>Alpha-props</h2>
                </div>
            </div>  
        </div>
    );
}

export default Projects;