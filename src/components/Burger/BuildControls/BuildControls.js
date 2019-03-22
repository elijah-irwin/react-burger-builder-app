import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildcontrols = (props) => {
  return(
    <div className={classes.BuildControls}>
      <p><strong>Total Price: </strong>${props.price.toFixed(2)}</p>
      {controls.map(item => (
        <BuildControl 
          key={item.label} 
          label={item.label}
          addIngredient={() => props.addIngredient(item.type)}
          removeIngredient={() => props.removeIngredient(item.type)}
          disabled={props.disabledInfo[item.type]}/>
      ))}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable} onClick={props.purchasing}>Checkout</button>
    </div>
  );
}

export default buildcontrols;