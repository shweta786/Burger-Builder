import React, { Component } from "react";
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {
    render() {
        return (
            <React.Fragment>
                <Burger/>
                <div>Burger Build Controls</div>
            </React.Fragment>
        );
    }
}