import './App.css';
import useState from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Game from '../Game/Game';
import Home from '../Home/Home';
import HighScore from '../HighScore/HighScore';

function App() {

  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="highscore" element={<HighScore />} />
    </Routes>
  );
}

export default App;
