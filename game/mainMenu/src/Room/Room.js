import React, {useRef, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import classes from './Room.module.css';
import PlayerList from '../components/PlayerList/PlayerList';
import Lobby from '../components/Lobby/Lobby';
import Game from '../components/Game/Game';

function Room(props) {
    const params = useParams()
    const [name, setName] = props.nameKit
    const [userID, setUserID] = props.idKit
    const [members, setMembers] = props.membersKit
    const [roomID, setRoomID] = useState(params.id)
    const roomSocket = useRef()

    const [showLobby, setShowLobby] = useState(true)
    const [showGame, setShowGame] = useState(false)


    function onMessage(event){
        const data = JSON.parse(event.data)
        console.log(data)
        if(data.form == 'upd_members'){
            fetch('/db/get_members/' + roomID + '/').then(response=>response.json()).then(json=>{
                setMembers(json.members)
                /*(ID==0)?{
                    console.log('setID')
                    setID(json.members.length - 1)
                }*/
            })
        } else if(data.form == 'start_game'){
            console.log('игра началась!!')
            setShowLobby(false)
            setShowGame(true)
        }
    }

        useEffect(()=>{
            fetch('/db/auth/' + roomID + '/' + name + '/').then(response => response.json()).then(json => {
                console.log("tyt bil json")
                setMembers(json.members)
                setUserID(json.members.length - 1)
                console.log(json.members.length)
                //console.log('Bottom len')
                //console.log('Len ' + json.members.length)
                roomSocket.current = new WebSocket('ws://' + window.location.host + '/ws/' + roomID + '/')
                roomSocket.current.onmessage = onMessage
                roomSocket.current.onopen= () => {roomSocket.current.send(JSON.stringify({"form": "upd_members"}))}
            })
        }, [])

    
    /*const handleClick = async() =>{
        try{
        const data= await(await fetch('https://api.npoint.io/3dbd0123ee2da3567328')).json()
        console.log(data)
        }
        catch(err){
        console.log(err.message)
        }
    }*/
    return (
        <div>
            <Lobby roomID={roomID} members={members} isVisible={showLobby}/>
            <Game roomSocket={roomSocket} roomID={roomID} members={members} userID = {userID} isVisible={showGame}/>
        </div>
    );
}

export default Room;
