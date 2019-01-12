import React from 'react';
import Aux from '../../../hoc/Aux';
import Button, {BUTTON_TYPE_SUCCESS, BUTTON_TYPE_DANGER} from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys( props.ingredients).map((ingredientKey) => {
        const formattedIngredientName = ingredientKey.charAt(0).toUpperCase()  + ingredientKey.slice(1);

        return (
            <li key={ingredientKey}><p><span>{formattedIngredientName}</span>: {props.ingredients[ingredientKey]}</p></li>
        );
    });

    return (
       <Aux>
           <h3>Your Burger:</h3>
           <hr/>
           <ul>
               {ingredientSummary}
           </ul>
           <hr/>
           <p><b>Price:</b> ${props.price}</p>
           <hr/>
           <p>Continue to checkout?</p>
           <Button buttonType={BUTTON_TYPE_DANGER} clicked={props.purchaseCancelled}>Cancel</Button>
           <Button buttonType={BUTTON_TYPE_SUCCESS} clicked={props.purhcaseContinued}>Continue</Button>
       </Aux>
    )
};

export default OrderSummary;