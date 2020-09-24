import React, { Component } from "react";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build-Controls/Build-Controls'

const INGREDIENT_PRICE = {
    salad: 20,
    cheese: 40,
    bacon: 25,
    meat: 55
};

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 30
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        let dupIng = JSON.parse(JSON.stringify(this.state.ingredients));
        dupIng[type] = updatedCount;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

        this.setState({
            ingredients: dupIng,
            totalPrice: newPrice
        })
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] === 0)
            return;

        const updatedCount = this.state.ingredients[type] - 1;
        let dupIng = JSON.parse(JSON.stringify(this.state.ingredients));
        dupIng[type] = updatedCount;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

        this.setState({
            ingredients: dupIng,
            totalPrice: newPrice
        })
    }

    render() {

        let disableInfo = {}
        for (let key in this.state.ingredients) {
            if (this.state.ingredients[key] <= 0)
                disableInfo[key] = true;
            else
                disableInfo[key] = false;
        }

        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disableInfo={disableInfo} />
            </React.Fragment>
        );
    }
}