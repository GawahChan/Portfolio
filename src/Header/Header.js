import React from 'react';
import './Header.css';
import NavigationBar from './Navigation/NavigationBar';

function Header() {
    return (
        <div className="Section-header" id="home">
          <NavigationBar/>
          <h1>Gawah Chan</h1>
          <h2>London based junior JavaScript/React Developer</h2>
        </div>
    )
}

export default Header;