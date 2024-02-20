import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { characters } from '../../shared/Characters';
import Game from '../Game/Game';

import './CharacterSelection.css';

const CharacterSelection = () => {
    const navigate = useNavigate();
    const randomEnemy = characters[Object.keys(characters)[Math.floor(Math.random() * Object.keys(characters).length)]];
    const [playerStats, setPlayerStats] = useState({});
    const [enemyStats, setEnemyStats] = useState(randomEnemy);

    const characterPick = (characterName) => {
        const selectedCharacter = characters[characterName];
        setPlayerStats(selectedCharacter);
        navigate('/game', { state: { playerStats: selectedCharacter, enemyStats: randomEnemy } });
    };

    return (
        <div className='select-character'>
            {Object.keys(characters).map((characterName) => (
                <div key={characterName} className='character-selection'>
                    <img
                        onClick={() => characterPick(characterName)}
                        className='character-img'
                        src={characters[characterName].img}
                        alt={characters[characterName].name}
                    />
                    <div className='character-name'>{characters[characterName].name}</div>
                </div>
            ))}
        </div>
    );
};

export default CharacterSelection;
