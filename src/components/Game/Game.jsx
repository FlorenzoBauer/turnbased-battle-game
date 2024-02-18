import './Game.css'
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import { enemyStats, playerStats } from '../../shared/Characters'
import BattleMenu from '../BattleMenu/BattleMenu'
import Announcer from '../Announcer/Announcer'
import { useEffect, useState } from 'react'
import { useBattleSequence } from '../../hooks/useBattleSequence'
import { useAIOpponent } from '../../hooks/useAIOpponent'

const Game = () => {
    const [sequence, setSequence] =useState({});

    const {
        turn,
        inSequence,
        opponentHealth,
        playerHealth,
        announcerMessage
    } = useBattleSequence(sequence)

    const aiChoice = useAIOpponent(turn)

    useEffect(() => {
        if(aiChoice && turn === 1 && !inSequence) {
          setSequence({ turn, mode: aiChoice })
        }
    }, [turn, aiChoice, inSequence])

    return (
        <div className='game'>
            <div className='player2summary'>
                <PlayerSummary 
                health={opponentHealth} 
                name={enemyStats.name} 
                level={enemyStats.level} 
                maxHealth={enemyStats.maxHealth} 
                className='AiSummary' main={true}/>
            </div>
            {/* <div className='characters-vs-sign' >
                {playerStats.name} vs {enemyStats.name}
            </div> */}
            <div className='player-characters'>
                <img className='character-imgs' src={playerStats.img} alt={playerStats.name} />
            </div>
            <div className='enemy-characters'>
                <img className='enem-imgs' src={enemyStats.img} alt={enemyStats.name} />
            </div>
            <div className='player1summary'>
                <PlayerSummary 
                health={playerHealth} 
                name={playerStats.name} 
                level={playerStats.level} 
                maxHealth={playerStats.maxHealth} 
                className='playerSummary' main={false} />
            </div>
            <div className='hud'>
                <Announcer message={
                    announcerMessage || `What will ${playerStats.name} do?`
                }/>

                <BattleMenu className='battle-menu'
                onAttack={() => setSequence({ turn, mode: 'attack' })}
                onAttack2={() => {console.log('Attack2')}}
                onAttack3={() => setSequence({ turn, mode: 'Magic' })}
                onHeal={() => setSequence({ turn, mode: 'Heal' })}
                />
            </div>
        </div>
    )
}

export default Game;