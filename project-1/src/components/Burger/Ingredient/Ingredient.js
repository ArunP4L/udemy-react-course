import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Classes from './Ingredient.css';

class Ingredient extends Component {

    render() {
        switch (this.props.ingredient) {
            case breadBottom:
                return <div className={Classes.BreadBottom}></div>;
            case breadTop:
                return (
                    <div className={Classes.BreadTop}>
                        <div className={Classes.Seeds1}></div>
                        <div className={Classes.Seeds2}></div>
                    </div>
                );
            case meat:
                return <div className={Classes.Meat}></div>;
            case cheese:
                return <div className={Classes.Cheese}></div>;
            case salad:
                return <div className={Classes.Salad}></div>;
            case bacon:
                return <div className={Classes.Bacon}></div>;
            default:
                return null;
        }
    }
}

Ingredient.propTypes = {
    ingredient: PropTypes.string.isRequired
};

export default Ingredient;
export const breadBottom = 'bread-bottom';
export const breadTop = 'bread-top';
export const meat = 'meat';
export const cheese = 'cheese';
export const salad = 'salad';
export const bacon = 'bacon';
