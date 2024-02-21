import './PlayerSummary.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HealthBar from '../HealthBar/HealthBar'
const red = '#821200'
const blue = '#1953cb'



const PlayerSummary = ({ main = false, name, level, health, maxHealth }) => {
    return (
        <main className="main">
            <div className='info'>
                <article className='name'>{name}</article>
                <article>Level: {level}</article>
            </div>
            <div>
                <HealthBar id='healthProgress'label="HP" health={health} maxHealth={maxHealth} />
            </div>
        </main>
    )
}

export default PlayerSummary;