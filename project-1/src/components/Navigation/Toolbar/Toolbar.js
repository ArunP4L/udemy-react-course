import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import Classes from './Toolbar.css';
import Menu from "./Menu/Menu";

const Toolbar = (props) => {
    return (
        <header className={Classes.Toolbar}>
            <Menu clicked={props.openSideDraw}/>
            <div className={Classes.Logo}>
                <Logo/>
            </div>
            <nav className={Classes.deskTop}>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default Toolbar;