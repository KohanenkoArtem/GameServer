import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    <div>
      <button {...props} className={classes.Button}>{props.children}</button>
    </div>
  );
}

export default Button;
