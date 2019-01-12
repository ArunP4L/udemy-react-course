import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];

const BuildControls = (props) => {

    const buildControls = controls.map(control => {
        return <BuildControl
            label={control.label}
            key={control.label}
            decrement={() => {
                props.decrementIngredient(control.type)
            }}
            increment={() => {
                props.incrementIngredient(control.type)
            }}
            disableLess={props.disableLessButtons[control.type]}
        />
    });


    return (
        <div className={Classes.BuildControls}>
            <p><strong>Current Price: {props.price}</strong></p>
            {buildControls}
            <button
                className={Classes.OrderButton}
                disabled={props.disableOrderButton}
                onClick={() => props.purchasingHandler()}
            >Order
            </button>
        </div>
    )
};

export default BuildControls;