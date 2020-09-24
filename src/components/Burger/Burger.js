import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burger-Ingredient/Burger-Ingredients'

const burger = (props) => {

    let ingredientsArray = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map(
                (val, key) => <BurgerIngredient type={ing} key={ing + key}></BurgerIngredient>
            )
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    console.log(ingredientsArray);

    if (ingredientsArray.length < 1) {
        ingredientsArray = <p>Please add Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='burger-top'></BurgerIngredient>
            {ingredientsArray}
            <BurgerIngredient type='burger-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;