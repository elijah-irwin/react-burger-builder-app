import React from 'react';
import classes from './BuildControl.css';

const buildcontrol = (props) => {
  return(
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button 
        className={classes.More} 
        onClick={props.addIngredient}>
        Add
      </button>
      
      <button 
        className={classes.Less} 
        onClick={props.removeIngredient} 
        disabled={props.disabled}>
        Remove
      </button>
    </div>
  );
}

export default buildcontrol;