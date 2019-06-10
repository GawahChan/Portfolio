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
                    <a href="https://kodflix-gawah.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Kodflix} alt="Kodflix Project" />
                        <div className="Overlay">
                            <h2>Kodflix</h2>
                            <p>A netflix inspired web app</p>
                        </div>
                    </a>
                </div>
                <div className="Projects-item">
                    <a href="https://alpha-properties-app.appspot.com/" target="_blank" rel="noopener noreferrer">
                        <img src={AlphaProps} alt="Alpha-Props Project" />
                        <div className="Overlay">
                            <h2>Alpha-props</h2>
                            <p>A mock real estate agency website based on high end properties in London </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;