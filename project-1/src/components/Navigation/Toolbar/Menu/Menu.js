import React from 'react';
import Hamburger from "./Hamburger/Hamburger";
import Classes from './Menu.css';

const Menu = (props) => {
    return (
        <div className={Classes.Menu} onClick={props.clicked}>
            <Hamburger/>
            <p>Menu</p>
        </div>
    )
};

export default Menu;