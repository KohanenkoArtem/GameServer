import React from 'react';
import AnswerToCard from '../AnswerToCard/AnswerToCard'
import classes from './GameWindows.module.css';

function LeaderWindow(props) {
    console.log('Лидер')
    const card = props.card;
    return (
      <div className = {classes.LeaderWindow}>
          <AnswerToCard card={card}/>
      </div>
    );
}

export default LeaderWindow;