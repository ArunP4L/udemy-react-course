import React from 'react';
import Ingredient, {breadTop, breadBottom} from "./Ingredient/Ingredient";
import Classes from './Burger.css';

const Burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map(ingredientKey => {
       return [...Array(props.ingredients[ingredientKey])].map((_, id) => {
           return <Ingredient ingredient={ingredientKey} key={ingredientKey + '_' + id + 1}/>
       });
    }).reduce( (arr, el) => arr.concat(el), []);
    console.log(ingredients);
    if (ingredients.length === 0) {
        ingredients = <p>Please add ingredients</p>
    }

    return (
        <div className={Classes.Burger}>
            <Ingredient ingredient={breadTop}/>
            {ingredients}
            <Ingredient ingredient={breadBottom}/>
        </div>
    );
};

export default Burger;