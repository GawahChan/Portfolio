import React from 'react';
import {SkillsContainer, SkillsTitle, SkillsList} from './style';

function Skills() {
    return (
        <SkillsContainer id="Skills">
            <SkillsTitle>My Skills</SkillsTitle>
            <SkillsList>
                <i class="fab fa-react fa-3x" />
                <i class="fab fa-node fa-3x" />
                <i class="fab fa-js-square fa-3x" />
                <i class="fab fa-html5 fa-3x" />
                <i class="fab fa-css3 fa-3x" />
                <i class="fab fa-git fa-3x" />
            </SkillsList>
        </SkillsContainer>
    );
}

export default Skills;