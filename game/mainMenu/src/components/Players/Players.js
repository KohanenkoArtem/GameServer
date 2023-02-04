import React from 'react';
import classes from './Players.module.css';

function Players(props) {
  const leader = props.leader

  return (
    <div className={classes.Players}>
        {props.members.map((player, index)=>
        (leader==index)?<div className = {classes.PlayerName} style={{border:'2px solid black', margin:'5px'}} key={index}>{player}</div>
        :<div className = {classes.PlayerName} style={{margin:'5px'}} key={index}>{player}</div>
        )}
    </div>
  );
}

export default Players;