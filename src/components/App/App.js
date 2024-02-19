import './App.css';
import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from '../Game/Game';
import Home from '../Home/Home';
import EndGame from '../EndGame/EndGame';
import HighScore from '../HighScore/HighScore';

function App() {
  const [winner, setWinner] = useState('')
  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game winner={winner} setWinner={setWinner}/>} />
      <Route path="highscore" element={<HighScore />} />
      <Route path="endGame" element={<EndGame winner={winner}/>} />
    </Routes>
  );
}

export default App;
