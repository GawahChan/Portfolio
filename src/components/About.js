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
          Hi, my name is Gawah and I'm a graduate from The University of York. I
          have a BSc Economics degree and have recently changed careers from
          Operations/Finance to Technology.
        </AboutParagraph>
        <AboutParagraph>
          I first began my journey into the world of code in 2019, enrolling in
          an intensive full-stack developer course at Kodiri bootcamp. After the
          bootcamp, I've been continuing my journey by learning on my own,
          utilising online resources such as Udemy and FreeCodeCamp as well as
          by learning through experimenting with personal side projects.
        </AboutParagraph>
        <AboutParagraph>
          Currently, I'm looking for a junior temporary/contract developer role
          to gain some experience before I start my graduate software developer
          role at Sky.
        </AboutParagraph>
        <AboutParagraph>
          If you're looking for an ambitious and enthusiastic junior developer,
          please get in touch!!
        </AboutParagraph>
      </AboutInfoContainer>
    </AboutContainer>
  );
}

export default About;
