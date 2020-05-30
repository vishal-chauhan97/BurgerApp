import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false,
    }

    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingKey => {
                return ingredients[ingKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable : sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type)  => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount -1;
        if(updatedCount < 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const price = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice - price;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxillary>
                <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    <OrderSummary
                    totalPrice={this.state.totalPrice}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinue = {this.purchaseContinueHandler} 
                    ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    disabled = {disabledInfo}
                />
            </Auxillary>
        )
    }
}

export default BurgerBuilder;