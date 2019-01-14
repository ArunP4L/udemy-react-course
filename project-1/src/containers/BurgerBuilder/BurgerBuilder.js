import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

import axious from '../../axios-orders';

const BURGER_INGREDIENT_COST = {
    salad: 0.2,
    cheese: 0.3,
    bacon: 0.9,
    meat: 1.1,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },
        price: 4,
        purchasing: false,
        loading: false,
    };

    handleIngredientIncrement = (type) => {
        let ingredients = this.state.ingredients;
        ingredients[type] += 1;
        let newPrice = this.state.price + BURGER_INGREDIENT_COST[type];
        this.setState({ingredients, price: newPrice});
    };

    handleIngredientDecrement = (type) => {
        if (this.state.ingredients[type] > 0) {
            let ingredients = this.state.ingredients;
            ingredients[type] -= 1;
            let newPrice = this.state.price - BURGER_INGREDIENT_COST[type];
            this.setState({ingredients, price: newPrice});
        }
    };

    shouldDisableOrderButton = () => {
        const ingredientsWithMoreThanZero = Object.keys(this.state.ingredients).filter((ingredient) => {
            return this.state.ingredients[ingredient] > 0;
        });

        return ingredientsWithMoreThanZero.length === 0;
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'test',
                address: {
                    street: 'test',
                    number: '22',
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'deliveroo',
        };
        this.setState({loading: true});
        axious.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false,
                });
            })
            .catch(error => {
                    this.setState({
                        loading: false,
                        purchasing: false,
                    });
                }
            );
    };

    componentDidMount() {
        axious.get('/ingredients.json'); 
    }

    render() {
        const disableLessButtons = {
            ...this.state.ingredients
        };
        for (let ingredient in disableLessButtons) {
            disableLessButtons[ingredient] = this.state.ingredients[ingredient] <= 0;
        }
        let modalContents = (
            <OrderSummary
                purchaseCancelled={this.purchaseCancelHandler}
                purhcaseContinued={this.purchaseContinueHandler}
                ingredients={this.state.ingredients}
                price={this.state.price.toFixed(2)}
            />
        );
        if (this.state.loading) {
            modalContents = <Spinner/>;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {modalContents}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.price.toFixed(2)}
                    incrementIngredient={this.handleIngredientIncrement}
                    decrementIngredient={this.handleIngredientDecrement}
                    disableLessButtons={disableLessButtons}
                    disableOrderButton={this.shouldDisableOrderButton()}
                    purchasingHandler={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default WithErrorHandler(BurgerBuilder, axious);
