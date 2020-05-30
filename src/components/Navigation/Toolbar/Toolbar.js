import React from 'react';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolabar = (props) => (
    <header className={classes.Toolbar}>

        <DrawerToggle clicked={props.drawToggleClicked}/>
        <div className={classes.LogoClass} >
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolabar;