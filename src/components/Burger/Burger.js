import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIgredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i)=> {
                return <BurgerIngredient key={ingKey+i} type={ingKey} />;
            });
        });
    const isEmpty = a => Array.isArray(a) && a.every(isEmpty);
    if(isEmpty(transformedIgredients)) {
        transformedIgredients = <p>Please start adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>    
            {transformedIgredients}
            <BurgerIngredient type="bread-bottom"/>    
        </div>
    )
}

export default Burger;