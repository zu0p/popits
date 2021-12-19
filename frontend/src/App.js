import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;