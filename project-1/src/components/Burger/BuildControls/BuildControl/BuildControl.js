import React from 'react';
import Classes from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button
                className={Classes.Less}
                onClick={props.decrement}
                disabled={props.disableLess}
            >Less</button>
            <button
                className={Classes.More}
                onClick={props.increment}
            >More</button>
        </div>
    );
};

export default BuildControl;