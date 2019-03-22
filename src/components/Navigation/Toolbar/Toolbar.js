import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      <div>Menu</div>
      
      <div className={classes.Logo}>
        <Logo/>  
      </div>  
      
      <div className={classes.Desktop}>
        <NavItems/> 
      </div> 
    </header>
  );
}

export default toolbar;