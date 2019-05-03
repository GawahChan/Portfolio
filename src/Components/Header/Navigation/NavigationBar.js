import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <div className="NavigationIcons">
                <a href="https://github.com/GawahChan" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/gawahchan/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
                    <i class="far fa-envelope"></i>     
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