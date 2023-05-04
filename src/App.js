import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Components
import Splash from './components/Splash';
import About from './components/About';
import UserHandle from './components/User/UserHandle';
import BetHandle from './components/Bet/BetHandle';

function App() {
  return (
    <div className='app-body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splash />}></Route>
            <Route path='/login' element={<UserHandle action='login' />}></Route>
            <Route path='/logout' element={<UserHandle action='logout' />}></Route>
            <Route path='/register' element={<UserHandle action='register' />}></Route>
            <Route path='/bet/:param' element={<BetHandle />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
