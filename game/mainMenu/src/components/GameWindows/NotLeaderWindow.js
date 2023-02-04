import React from 'react';
import classes from './GameWindows.module.css';

function NotLeaderWindow(props) {
    console.log('Не лидер')
    return (
      <div>
          <div className = {classes.Pass}><center>Здесь должно быть игровое поле не ведущего</center></div>
      </div>
    );
}

export default NotLeaderWindow;