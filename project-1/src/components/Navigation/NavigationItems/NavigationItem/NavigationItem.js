import React from 'react';
import Classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className={Classes.NavigationItem}>
            <a href={props.link} className={props.isActive ? Classes.active : null}>{props.children}</a>
        </li>
    )
};

export default NavigationItem;
