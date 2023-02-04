import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button.js'
import classes from './Join.module.css'
import CLIinput from '../components/CLIinput/CLIinput.js'

function Join(props) {
    const navigate = useNavigate();
    const [name, setName] = props.nameKit;
    const [code, setCode] = useState()

    return (
        <div>
            <div className={classes.Code}>
                <p>Введите код комнаты:</p>
                <CLIinput setter={setCode} placeholder='########'/>
                <br/>
                <Button style={{width: '200px', height: '61px'}} onClick={()=>{navigate('/'+code)}}>Войти</Button>
            </div>
        </div>
    );
}

export default Join;
