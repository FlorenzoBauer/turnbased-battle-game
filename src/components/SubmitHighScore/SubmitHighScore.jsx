import React, { useState } from 'react';
import './SubmitHighScore.css';
import { useNavigate
 } from 'react-router-dom';

function SubmitHighScore({playerWins, winner}) {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
console.log(winner)
console.log(winner.winner.name)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length === 3) {
      setErrorMessage('');

      const postData = {
        initials: inputValue,
        techTamer: winner.winner.name, 
        wins: playerWins,
      };

      fetch('https://turn-based-game-server-24fb90dc319f.herokuapp.com/api/v1/highscores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Data successfully posted');
          } else {
            console.error('Failed to post data');
          }
        })
        .then(navigate('../highscore'))
        .catch((error) => console.error('Error:', error));
    } else {
      setErrorMessage('Please enter exactly 3 characters.');
    }
  };

  return (
    <div className="submit-highscore-section">
      <form onSubmit={handleSubmit}>
        <label>
          Enter 3 characters:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <p>{winner.winner.name}</p>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default SubmitHighScore;
