import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HighScore.css';

const HighScore = () => {
    const navigate = useNavigate();

    const handleHomeButtonClick = () => {
        navigate('/'); 
    };

    return (
        <div className='highscore'>
            <h1 className='highscore-title'>High Scores!</h1>
            <div className='details'>
                <h2>Player:</h2>
                <h2>Digi Coder:</h2>
                <h2>Score:</h2>
            </div>
            <div className='mapped-score-cards'>{/* Would auto fill player name, character chosen, and score by stored api data built like the
                way the cards in rancid tomatillo map out the data */}
                </div>
            <button className='home-button' onClick={handleHomeButtonClick}>Home</button>
        </div>
    );
};

export default HighScore;
