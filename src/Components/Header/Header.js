import React from 'react';
import './Header.css';
import NavigationBar from './Navigation/NavigationBar';

function Header() {
  return (
    <div className="Section-header" id="Home">
      <NavigationBar />
      <div className="Section-header-Overlay">
        <h1>Gawah Chan</h1>
        <h2>London based Junior Full-Stack Developer</h2>
      </div>
    </div>
  );
}

export default Header;