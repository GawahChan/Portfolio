import React from 'react';

import { AboutContainer, ProfilePic } from './styled';
import AboutInfo from './AboutInfo';

function About() {
    return (
        <AboutContainer id="About">
            <ProfilePic />
            <AboutInfo />
        </AboutContainer>
    );
}

export default About;