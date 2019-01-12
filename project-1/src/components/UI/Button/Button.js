import React from 'react';
import Classes from './Button.css'

const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={[Classes.Button, Classes[props.buttonType]].join(' ')}
        >{props.children}</button>
    );
};

export default Button;
export const BUTTON_TYPE_SUCCESS = 'Success';
export const BUTTON_TYPE_DANGER = 'Danger';