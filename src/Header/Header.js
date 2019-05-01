import React from 'react';
import NavigationBar from './Navigation/NavigationBar';

function Header() {
    return (
        <div className="Section-header" id="home">
          <NavigationBar/>
          <p>Welcome to Gawah's WIP portfolio!</p>
        </div>
    )
}

export default Header;