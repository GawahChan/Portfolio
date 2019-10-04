import React from 'react';
import NavigationIcons from './NavigationIcons';
import NavigationMenu from './NavigationMenu';
import { NavigationContainer } from './styled';

function NavigationBar() {
    return (
        <NavigationContainer>
            <NavigationIcons />
            <NavigationMenu />
        </NavigationContainer>
    );
}

export default NavigationBar;