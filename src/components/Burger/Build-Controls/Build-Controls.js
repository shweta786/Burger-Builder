import React from 'react';
import classes from './Build-Controls.module.css';
import BuildControl from '../Build-Controls/Build-Control/Build-Control';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price {props.price}</p>
        {
            controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    moreClicked={() => props.addIngredient(ctrl.type)}
                    lessClicked={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disableInfo[ctrl.type]} />
            ))
        }
    </div>
)

export default buildControls;