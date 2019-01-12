import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";

import Classes from './Sidedrawer.css'
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidedrawer = (props) => {
    const attachedClasses = [Classes.SideDrawer, props.show ? Classes.Open : Classes.Close].join(' ');

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className={Classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default Sidedrawer;