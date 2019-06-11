import React from 'react';
import './Header.css';
import NavigationBar from './Navigation/NavigationBar';

function Header() {
  return (
    <div className="Section-header" id="Home">
      <NavigationBar />
      <h1>Gawah Chan</h1>
      <h2>London based Full-Stack Developer</h2>
    </div>
    );
}

export default Header;