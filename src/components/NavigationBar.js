import React from "react";
import {
  NavigationContainer,
  NavigationIconsContainer,
  NavigationIcon,
  NavigationMenuContainer,
  NavigationOption,
} from "../styles/components/NavigationBar.styled";

function NavigationBar() {
  return (
    <NavigationContainer>
      <NavigationIconsContainer>
        <NavigationIcon
          href="https://github.com/GawahChan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg" />
        </NavigationIcon>
        <NavigationIcon
          href="https://www.linkedin.com/in/gawahchan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg" />
        </NavigationIcon>
        <NavigationIcon href="mailto:gawahchan@gmail.com">
          <i className="far fa-envelope fa-lg" />
        </NavigationIcon>
      </NavigationIconsContainer>
      <NavigationMenuContainer>
        <NavigationOption smooth to="#Home">
          Home
        </NavigationOption>
        <NavigationOption smooth to="#About">
          About
        </NavigationOption>
        <NavigationOption smooth to="#Skills">
          Skills
        </NavigationOption>
        <NavigationOption smooth to="#Projects">
          Projects
        </NavigationOption>
      </NavigationMenuContainer>
    </NavigationContainer>
  );
}

export default NavigationBar;
