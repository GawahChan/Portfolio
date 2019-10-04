import React from 'react';

import { HeaderContainer, HeaderOverlay, HeaderTitle, HeaderSubtitle } from './styled';

function Header() {
  return (
    <HeaderContainer id='Home'>
      <HeaderOverlay>
        <HeaderTitle>Gawah Chan</HeaderTitle>
        <HeaderSubtitle>London based Junior Full-Stack Developer</HeaderSubtitle>
      </HeaderOverlay>
    </HeaderContainer>
  );
}

export default Header;