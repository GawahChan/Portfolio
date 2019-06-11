import React from 'react';

import './Skills.css'

function Skills() {
    return (
        <div className="skills-container" id="Skills">
            <h1>My Skills</h1>
            <div className="skills-languages">
                <i class="fab fa-react fa-3x" />
                <i class="fab fa-node fa-3x" />
                <i class="fab fa-js-square fa-3x" />
                <i class="fab fa-html5 fa-3x" />
                <i class="fab fa-css3 fa-3x" />
                <i class="fab fa-git fa-3x" />
            </div>
        </div>
    );
}

export default Skills;