import './Game.css'
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import { enemyStats, playerStats } from '../../shared/Characters'
import BattleMenu from '../BattleMenu/BattleMenu'
import Announcer from '../Announcer/Announcer'
import { useEffect, useState } from 'react'
import { useBattleSequence } from '../../hooks/useBattleSequence'
import { useAIOpponent } from '../../hooks/useAIOpponent'
import { wait } from '../../shared/Helpers'
import { EndGame } from '../EndGame/EndGame'
import { Navigate, useNavigate } from 'react-router-dom'

const Game = ({winner, setWinner}) => {
    const navigate = useNavigate();

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
    
    useEffect(() => {
        if (playerHealth === 0 || opponentHealth === 0) {
          (async () => {
            await wait(1000);
            setWinner({
              winner: playerHealth <= 0 ? enemyStats : playerStats,
            });
            navigate('/endgame')
          })();
        }
      }, [playerHealth, opponentHealth]);

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
                onAttack1={() => setSequence({ turn, mode: playerStats.attacks[0].name })}
                onAttack2={() => setSequence({ turn, mode: playerStats.attacks[1].name})}
                onAttack3={() => setSequence({ turn, mode: playerStats.attacks[2].name})}
                onHeal={() => setSequence({ turn, mode: playerStats.attacks[3].name })}
                />
            </div>
        </div>
    )
}

export default Game;