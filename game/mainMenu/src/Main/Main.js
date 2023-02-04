import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button.js'
import classes from './Main.module.css'
import CLIinput from '../components/CLIinput/CLIinput.js'
//import { useNavigate } from 'react-router-dom';

function Main(props) {
  const [name, setName] = props.nameKit;

  const handleClick = async() =>{
    try{
      const data= await(await fetch('https//:'+window.location.host+'/mainMenu/freeID/')).json()
      console.log(data)
    }
    catch(err){
      console.log(err.message)
    }
  }
  const navigate = useNavigate();

  return (
    <div>
      <p className={classes.Title}>ИГРУЛЕЧКА</p>
      <div className={classes.Buttons}>
        <Button style={{width: '191px', height: '61px'}} onClick={()=>{navigate('/host')}}>Создать игру</Button>
        <Button style={{width: '191px', height: '61px'}} onClick={()=>{navigate('/room')}}>Присоединиться</Button>
      </div>
      <span className={classes.test}>
        <CLIinput setter={setName} placeholder='Мое имя'/>
      </span>
    </div>
  );
}

export default Main;
