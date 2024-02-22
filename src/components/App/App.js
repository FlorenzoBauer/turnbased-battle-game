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
  const [loser, setLoser] = useState("")

  const [winner, setWinner] = useState("")

  const [playerWins, setPlayerWins] = useState(0)

  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Home setPlayerWins={setPlayerWins} />} />
      <Route path="/game" element={<Game setLoser={setLoser} setWinner={setWinner}/>} />
      <Route path="highscore" element={<HighScore />} />
      <Route path="endGame" element={<EndGame playerWins={playerWins} setPlayerWins={setPlayerWins} loser={loser} winner={winner}/>} />
      <Route path="selectCharacter" element={<CharacterSelection />} />
      <Route path="submitHighScore" element={<SubmitHighScore loser={loser} winner={winner}playerWins={playerWins}/>} />
    </Routes>
  );
}
export default App;
