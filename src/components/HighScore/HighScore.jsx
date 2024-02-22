import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HighScore.css';

const HighScore = () => {
    const navigate = useNavigate();
    const [highScores, setHighScores] = useState([]);

    const getHighscores = () => {
        fetch('https://turnbased-game-server-cb50ff6b890a.herokuapp.com/highscores')
        .then(response => response.json())
        .then(data => {
        setHighScores(data); 
        })
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        getHighscores();
    }, []);

    const handleHomeButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='highscore'>
            <h1 className='highscore-title'>High Scores!</h1>
            <div className='details'>
                <h2>Player:</h2>
                <h2>Tech Tamer:</h2>
                <h2>Wins:</h2>
            </div>
            <div className='mapped-score-cards'>
                {highScores && highScores.sort((a, b) => b.wins - a.wins).map((score, index) => (
                    <div key={index} className="score-card">
                        <p>{score.initials}</p>
                        <p>{score.character}</p>
                        <p>{score.wins}</p>
                    </div>
                ))}
            </div>
            <button className='home-button' onClick={handleHomeButtonClick}>Home</button>
        </div>
    );
};

export default HighScore;

