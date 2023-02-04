import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button'
import PlayerList from '../PlayerList/PlayerList'
import classes from './Lobby.module.css'

function Lobby(props) {
    const members = props.members
    const roomID = props.roomID

    if(!props.isVisible){return}

    return (
        <div>
            <div className={classes.Code}>
                <p>Код комнаты:</p>
                <p className={classes.BigNum}>{roomID}</p>
                <PlayerList members={members}/>
                <Button style={{width: '303px', height: '61px'}} onClick={props.startGame}>Начать</Button>
            </div>
        </div>
    );
}

export default Lobby;
