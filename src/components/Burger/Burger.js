import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import classes from './Burger.css';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, index) => {
        return <Ingredient key={key + index} type={key}/>
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Add ingredients!</p>
    }

    console.log(transformedIngredients);

  return(
    <div className={classes.Burger}>
      <Ingredient type="bread-top"/>
      {transformedIngredients}
      <Ingredient type="bread-bottom"/>
    </div>
  );
}

export default burger;