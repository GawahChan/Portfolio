import React from 'react';
import './NavigationBar.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <div className="NavigationIcons">
                <a href="https://github.com/GawahChan" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/gawahchan/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="mailto:gawahchan@gmail.com">
                    <i class="far fa-envelope fa-lg"></i>  
                </a>   
            </div>
                <div className="NavigationMenu">
                    <Link smooth to="#Home">
                        <h3>Home</h3>
                    </Link>
                    <Link smooth to="#About">
                    <h3>About</h3>
                    </Link>
                    <Link smooth to="#Projects">
                        <h3>Projects</h3>
                    </Link>
                </div>
            </div>
            );
        }
        
export default NavigationBar;