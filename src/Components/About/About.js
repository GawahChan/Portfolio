import React from 'react';
import './About.css';
import PorfilePic from '../../common/images/Kodiri profile pic.PNG'

function About() {
    return (
        <div className="about-container" id="About">
            <img src={PorfilePic} alt="Profile Pic" />
            <h1>Welcome!</h1>
            <p>
                Hi, my name is Gawah. I'm a Full-Stack developer based in London, currently looking for a Junior Developer Position.
                I recently graduated from The University of York with a BSc Economics degree and am looking to break into the tech industry.
            </p>
            <p>
                I'm currently a student at Kodiri BootCamp and have experience working with a number of technologies including: 
            </p>
            <p>
                React, JavaScript, HTML and CSS.
            </p>
            <p>
                If you're looking for an ambitious and enthusiastic Junior Full-Stack Developer, please get in touch!
            </p>
        </div>
    )
}

export default About;
