import './App.css';
import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from '../Game/Game';
import Home from '../Home/Home';
import EndGame from '../EndGame/EndGame';
import HighScore from '../HighScore/HighScore';
import CharacterSelection from '../CharacterSelection/CharacterSelection';
import SubmitHighScore from '../SubmitHighScore/SubmitHighScore';

function App() {
  const [winner, setWinner] = useState("")
  const [playerWins, setPlayerWins] = useState(0)
  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Home setPlayerWins={setPlayerWins} />} />
      <Route path="/game" element={<Game winner={winner} setWinner={setWinner}/>} />
      <Route path="highscore" element={<HighScore />} />
      <Route path="endGame" element={<EndGame playerWins={playerWins} setPlayerWins={setPlayerWins} winner={winner}/>} />
      <Route path="selectCharacter" element={<CharacterSelection />} />
      <Route path="submitHighScore" element={<SubmitHighScore winner={winner}playerWins={playerWins}/>} />
    </Routes>
  );
}
export default App;
