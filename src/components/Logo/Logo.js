import React from 'react';

import classes from './Logo.module.css';

import burgerLogo from '../../assets/images/burgerLogo.png';

const Logo = (props) =>(
    <div className={classes.Logo}> <img src={burgerLogo} alt="myBurger"/> </div>
)

export default Logo;