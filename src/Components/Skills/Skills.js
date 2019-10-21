import React from 'react';
import {SkillsContainer, SkillsTitle, SkillsList} from './style';

function Skills() {
    return (
        <SkillsContainer id="Skills">
            <SkillsTitle>My Skills</SkillsTitle>
            <SkillsList>
                <i className="fab fa-react fa-3x" />
                <i className="fab fa-node fa-3x" />
                <i className="fab fa-js-square fa-3x" />
                <i className="fab fa-html5 fa-3x" />
                <i className="fab fa-css3 fa-3x" />
                <i className="fab fa-git fa-3x" />
            </SkillsList>
        </SkillsContainer>
    );
}

export default Skills;