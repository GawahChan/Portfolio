import React from 'react';
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <div className="NavigationIcons">
            </div>
            <div className="NavigationMenu">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Skills</h3>
                <h3>Projects</h3>
            </div>
        </div>
    );
}

export default NavigationBar;