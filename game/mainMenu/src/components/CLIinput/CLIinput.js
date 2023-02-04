import React from 'react';
import { useState } from 'react';
import classes from './CLIinput.module.css';

function CLIinput({setter, ...props}) {
  const changeValue=(target, setter)=>{
    target.style.width = ((target.value.length + 1) * 10) + 'px'
    if(target.style.width=='10px'){
      target.style.width='88px'
    }
    setter(target.value)
  }
  return (
    <div className = {classes.Line}>
      <span>{'>'}</span>
      <input {...props} type="text" onChange={e=>changeValue(e.target, setter)} className={classes.Input}/>
      <span>_</span>
    </div>
  );
}

export default CLIinput;
