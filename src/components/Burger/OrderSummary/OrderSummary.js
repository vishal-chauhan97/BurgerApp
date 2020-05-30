import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button'
class OrderSummary extends Component {

    componentWillUpdate () {
        console.log('[OrderSummary] will Update');
    }

    render () {

        const IngredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
        return <li key={ingKey}>
            <span style={{textTransformation : 'Capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
            </li>
        });

        return (
            <Auxillary>
                <h3>Your Orders</h3>
                <p>A delicous burger with the following ingredients:</p>
                <ul>
                    {IngredientSummary}
                </ul>
        <span>Price: <strong>{this.props.totalPrice.toFixed(2)}</strong></span>
                <p>continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Auxillary>
        )
    }
}

export default OrderSummary