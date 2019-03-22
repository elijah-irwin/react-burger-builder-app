import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Sidedrawer.css';


const sidedrawer = (props) => {
  return(
    <div className={classes.Sidedrawer}>
      
      <div className={classes.Logo}>
        <Logo/> 
      </div>

      <nav>
        <NavItems/>
      </nav>
    </div>
  );
}

export default sidedrawer;