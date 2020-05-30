import React, { Component } from 'react';
import Auxillary from '../Auxillary';
import Classes from './LayoutStyle.module.css';
import Toolbar from  '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component{

    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) =>{
           return  {showSideDrawer: ! prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Auxillary>
                <Toolbar drawToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerClosedHandler} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Auxillary>   
        )
    }
}
export default layout;