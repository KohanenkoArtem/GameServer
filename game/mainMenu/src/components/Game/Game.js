import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Players from '../Players/Players'
import CardList from '../CardList/CardList'
import LeaderWindow from '../GameWindows/LeaderWindow'
import NotLeaderWindow from '../GameWindows/NotLeaderWindow'

import classes from './Game.module.css'

function Game(props) {
    if (!props.isVisible){
        return
    }
    console.log('рендер')
    const roomID = props.roomID
    const members = props.members
    const userID = props.userID

    const [leader, setLeader] = useState(0)
    const [cards, setCards] = useState([])
    const [selectedCard, setSelectedCard] = useState('')

    const OnMessage = (event) => {
        const data = JSON.parse(event.data)
        console.log(data)
    }

    useEffect(()=>{
        fetch('/db/get_my_cards/' + roomID + '/' + userID + '/').then(response => response.json()).then(json => {
        setCards(json.cards)
        console.log(json.cards)
     })}, [])

     console.log('Ниже сравнение')
     console.log((leader===userID))
    return (
        <div>
            <div className={classes.Field}>
                <div className={classes.CardList}>
                    <CardList cards={cards} setSelectedCard={setSelectedCard}/>
                </div>
                {(leader==userID) ? <LeaderWindow card={selectedCard}/> : <NotLeaderWindow/>}
                <Players members={members} leader={leader}/>
            </div>
        </div>
    );
}

export default Game;
