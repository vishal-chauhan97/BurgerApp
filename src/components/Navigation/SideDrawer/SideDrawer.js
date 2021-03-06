import React from 'react';

import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary';

import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo1}>
                    <Logo />
                </div>
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Auxillary>      
    )
}

export default SideDrawer;