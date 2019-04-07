import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return(
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy!</h1>
      <div>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Success" clicked={props.checkoutConfirm}>Continue</Button>
      <Button btnType="Danger" clicked={props.checkoutCancel}>Cancel</Button>
    </div>
  );
}

export default checkoutSummary;