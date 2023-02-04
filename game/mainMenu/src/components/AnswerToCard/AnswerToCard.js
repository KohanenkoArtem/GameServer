import React from 'react';
import classes from './AnswerToCard.module.css';

function AnswerToCard(props) {
  return (
    <div>
        <div className={classes.Card}>
            <div>{props.card}</div>
        </div>
        <input type="text" placeholder="Ответ" className={classes.Answer}/>
    </div>
  );
}

export default AnswerToCard;