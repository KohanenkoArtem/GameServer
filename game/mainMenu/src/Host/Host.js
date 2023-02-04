import React, {useEffect, useState, useRef} from 'react';
import classes from './Host.module.css'
import PlayerList from '../components/PlayerList/PlayerList';
import Button from '../components/Button/Button';
import Lobby from '../components/Lobby/Lobby';
import HostLobby from '../components/Lobby/HostLobby';
import Game from '../components/Game/Game';

function Host(props) {
  const [name, setName] = props.nameKit
  const [userID, setUserID] = props.idKit
  const [members, setMembers] = props.membersKit
  const [roomID, setRoomID] = useState(0)
  const roomSocket = useRef(null)

  const [showLobby, setShowLobby] = useState(true)
  const [showGame, setShowGame] = useState(false)



  const onMessage = (event) =>{
    const data = JSON.parse(event.data)
    console.log(data)
    if(data.form == 'upd_members'){
        fetch('/db/get_members/' + roomID + '/').then(response=>response.json()).then(json=>{
        setMembers(json.members)
        })
    } else if(data.form == 'start_game'){
        console.log('Игра началась')
        setShowLobby(false)
        setShowGame(true)
    }
  }

  const startGame = () => {
    if(members.length<3){
        alert("Недостаточно игроков")
        return
    }
    fetch('/db/deal_cards/' + roomID + '/').then(()=>{
        roomSocket.current.send(JSON.stringify({"form": "start_game"}))
    })
  }

  useEffect(()=>{
    fetch('/db/new_room/').then(response => response.json())
    .then(json => setRoomID(json.id))
  }, [])

  useEffect(()=>{
      fetch('/db/auth/' + roomID + '/' + name + '/')
      .then(response => response.json())
      .then(json => {
          console.log(json)
          setMembers(json.members)})
      .then(()=>{
          roomSocket.current = new WebSocket('ws://' + window.location.host + '/ws/' + roomID + '/')
          console.log(roomSocket.current)
          roomSocket.current.onmessage = onMessage
      })}, [roomID])


  return (
    <div>
        <HostLobby roomID={roomID} members={members} startGame={startGame} isVisible={showLobby}/>
        <Game roomSocket={roomSocket} roomID={roomID} members={members} userID = {userID} isVisible={showGame}/>
    </div>
  );
}

export default Host;
