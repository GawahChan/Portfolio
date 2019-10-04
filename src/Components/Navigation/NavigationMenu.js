import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavigationMenuContainer, NavigationOption } from './styled';

function NavigationMenu() {
    return (
        <NavigationMenuContainer >
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
    )
}

export default NavigationMenu;