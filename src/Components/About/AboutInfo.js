import React from 'react';

import { AboutInfoContainer, AboutTitle, AboutParagraph } from './styled';

function AboutInfo() {
    return (
        <AboutInfoContainer>
            <AboutTitle>Welcome!</AboutTitle>
            <AboutParagraph>
                Hi, my name is Gawah. I'm a Junior Full-Stack developer based in London, currently looking for a Junior Developer Position.
                I'm a graduate from The University of York with a BSc Economics degree and am looking to break into the tech industry!
                </AboutParagraph>
            <AboutParagraph>
                I've recently finished an intensive full-stack developer course at Kodiri BootCamp and have experience working with a number of technologies, including:
                </AboutParagraph>
            <AboutParagraph>
                React.js, Node.js Express, JavaScript, HTML, CSS and MongoDB.
                </AboutParagraph>
            <AboutParagraph>
                If you're looking for an ambitious and enthusiastic Junior Full-Stack Developer, please get in touch!
                </AboutParagraph>
        </AboutInfoContainer>
    )
}

export default AboutInfo;