import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
        <Link smooth to="#Home">
          <NavigationOption>Home</NavigationOption>
        </Link>
        <Link smooth to="#About">
          <NavigationOption>About</NavigationOption>
        </Link>
        <Link smooth to="#Skills">
          <NavigationOption>Skills</NavigationOption>
        </Link>
        <Link smooth to="#Projects">
          <NavigationOption>Projects</NavigationOption>
        </Link>
      </NavigationMenuContainer>
    </NavigationContainer>
  );
}

export default NavigationBar;
