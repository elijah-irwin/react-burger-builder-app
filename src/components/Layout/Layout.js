import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

import classes from './Layout.css';

const layout = (props) => {
  return(
    <Auxiliary>
      <Toolbar/>
      <Sidedrawer/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  );
}

export default layout;