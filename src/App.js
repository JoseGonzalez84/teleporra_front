import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Components
import Splash from './components/Splash';
import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'

function App() {
  return (
    <div className='app-body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splash />}></Route>
            <Route path='/login' element={<UserLogin />}></Route>
            <Route path='/logout' element={<UserLogin />}></Route>
            <Route path='/register' element={<UserRegister />}></Route>
            <Route path='/bet' element={<UserRegister />}></Route>
            <Route path='/about' element={<UserRegister />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
