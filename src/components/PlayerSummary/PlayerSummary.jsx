import './PlayerSummary.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const red = '#821200'
const blue = '#1953cb'



const PlayerSummary = ({ main }) => {
    return (
        <main className="playerSummary">
            <h1>Player Summary</h1>
            <p>Player: 0</p>
            
            <button className='playAgainButton'>Play Again</button>
        </main>
    )
}