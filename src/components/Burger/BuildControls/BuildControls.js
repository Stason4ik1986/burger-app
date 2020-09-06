import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
];

const buildControl = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control =>
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]} />
        )}
        <button
            disabled={!props.purchasable}
            className={classes.OrderButton}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControl;