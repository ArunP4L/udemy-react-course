import React from 'react';
import logoImg from '../../assets/img/burger-logo.png';

import Classes from './Logo.css';

const Logo = (props) => {
    return (
        <div className={Classes.Logo}>
            <img src={logoImg} alt="logo"/>
        </div>
    )
};

export default Logo;
