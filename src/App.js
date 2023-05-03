import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Components
import Splash from './components/Splash';
import UserHandle from './components/UserHandle';
import UserRegister from './components/UserRegister'
import BetHandle from './components/BetHandle';

function App() {
  return (
    <div className='app-body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splash />}></Route>
            <Route path='/login' element={<UserHandle action='login' />}></Route>
            <Route path='/logout' element={<UserHandle action='logout' />}></Route>
            <Route path='/register' element={<UserHandle action='register' />}></Route>
            <Route path='/bet/list' element={<BetHandle />}></Route>
            <Route path='/bet/:id' element={<BetHandle />}></Route>
            <Route path='/new-bet' element={<BetHandle action='new-bet' />}></Route>
            <Route path='/about' element={<UserRegister />}></Route>
          </Routes>11
        </BrowserRouter>
    </div>
  );
}

export default App;
