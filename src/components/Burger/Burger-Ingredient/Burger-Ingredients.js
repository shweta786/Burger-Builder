import React, { Component } from 'react';
import classes from './Burger-Ingredients.module.css';
import Proptypes from 'prop-types';

export default class BurgerIngredient extends Component {

    render() {
        let ingradient = null;

        switch (this.props.type) {
            case ('burger-bottom'):
                ingradient = <div className={classes.BreadBottom}></div>
                break;
            case ('burger-top'):
                ingradient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            case ('meat'):
                ingradient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingradient = <div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingradient = <div className={classes.Salad}></div>
                break;
            case ('bacon'):
                ingradient = <div className={classes.Bacon}></div>
                break;
            default:
                ingradient = null;
        }
        return ingradient;
    }

}

BurgerIngredient.propTypes = {
    type: Proptypes.string.isRequired
}