import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import './App.css';
import Main from './Main/Main';
import Host from './Host/Host';
import Join from './Join/Join';
import Room from './Room/Room';

function App() {
  const nameKit = useState()
  const idKit = useState(0)
  const membersKit = useState([' '])

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main nameKit={nameKit}/>}/>
          <Route path='/host' element={<Host nameKit={nameKit} idKit={idKit} membersKit={membersKit}/>}/>
          <Route path='/room' element={<Join nameKit={nameKit}/>}/>
          <Route path=':id' element={<Room nameKit={nameKit} idKit={idKit} membersKit={membersKit}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
