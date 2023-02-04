import React from 'react';
import Player from './Player';
import classes from './PlayerList.module.css';

function PlayerList(props) {
  return (
    <div className={classes.List}>
      {props.members.map((player, index)=><Player name={player} key={index}/>)}
    </div>
  );
}

export default PlayerList;