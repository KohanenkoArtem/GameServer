import React from 'react';
import classes from './CardList.module.css';

function CardList(props) {
  const setSelectedCard = props.setSelectedCard
  return (
    <div className={classes.List}>
      {props.cards.map((card, index)=><div className={classes.Card} onClick={()=>setSelectedCard(card)} key={index}>{card}</div>)}
    </div>
  );
}

export default CardList;