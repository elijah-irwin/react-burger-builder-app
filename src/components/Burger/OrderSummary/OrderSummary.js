import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return(
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>
      );
    });

  return(
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Pog burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: ${props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.continueOrder}>Continue</Button>
      <Button btnType="Danger" clicked={props.cancelOrder}>Cancel</Button>
    </Auxiliary>
  );
}

export default orderSummary;