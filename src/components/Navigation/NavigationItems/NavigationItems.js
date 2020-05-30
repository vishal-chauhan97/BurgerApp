import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigationitems  = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active={true} >Burger Builder</NavigationItem>
            <NavigationItem link="/" > Checkout </NavigationItem>
        </ul>
    )
}

export default Navigationitems;