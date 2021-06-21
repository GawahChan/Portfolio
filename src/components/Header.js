import React from "react";

import {
  HeaderContainer,
  HeaderOverlay,
  HeaderTitle,
  HeaderSubtitle,
} from "../styles/components/Header.styled";

function Header() {
  return (
    <HeaderContainer id="Home">
      <HeaderOverlay>
        <HeaderTitle>Gawah Chan</HeaderTitle>
        <HeaderSubtitle>
          London based Associate Software Developer
        </HeaderSubtitle>
      </HeaderOverlay>
    </HeaderContainer>
  );
}

export default Header;
