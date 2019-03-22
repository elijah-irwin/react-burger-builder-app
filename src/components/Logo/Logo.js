import React from 'react';
import burgLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = () => {
  return(
    <div className={classes.Logo}>
      <img src={burgLogo} alt="Logo"></img>
    </div>
  );
}

export default logo;