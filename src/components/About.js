import React from "react";

import {
  AboutContainer,
  ProfilePic,
  AboutInfoContainer,
  AboutTitle,
  AboutParagraph,
} from "../styles/components/About.styled";

function About() {
  return (
    <AboutContainer id="About">
      <ProfilePic />
      <AboutInfoContainer>
        <AboutTitle>Welcome!</AboutTitle>
        <AboutParagraph>
          Hi, my name is Gawah and I'm an Associate Software Developer for Sky.
          I'm a graduate from the University of York with a BSc in Economics.
        </AboutParagraph>
        <AboutParagraph>
          I first began my journey into Software Development in 2019, enrolling
          in an intensive full-stack developer course at Kodiri bootcamp. After
          the bootcamp, I've been continuing my journey through learning by
          experimenting with personal side projects, working as a freelance
          developer as well as through online courses from Udemy and
          FreeCodeCamp.
        </AboutParagraph>
        <AboutParagraph>
          I'm currently not looking for any roles at the moment, however feel
          free to contact me if you'd still like to get in touch!
        </AboutParagraph>
      </AboutInfoContainer>
    </AboutContainer>
  );
}

export default About;
