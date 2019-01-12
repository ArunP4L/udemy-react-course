import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return (
        <ul className={Classes.NavigationItems}>
            <NavigationItem isActive={true} link={"/"}>Burger Builder</NavigationItem>
            <NavigationItem link={"/"}>Checkout</NavigationItem>
        </ul>
    )
};

export default NavigationItems;
