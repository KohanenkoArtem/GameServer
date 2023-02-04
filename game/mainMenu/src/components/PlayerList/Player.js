import React from 'react';
import classes from './PlayerList.module.css';

function Player(props) {
  return (
    <div className={classes.Player}>
        <p>{props.name}</p>
    </div>
  );
}

export default Player;