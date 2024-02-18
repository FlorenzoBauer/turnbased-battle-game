import './Game.css'
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import { enemyStats, playerStats } from '../../shared/Characters'
import BattleMenu from '../BattleMenu/BattleMenu'
import Announcer from '../Announcer/Announcer'
import { useState } from 'react'


const Game = () => {
    const [opponentHealth, setOpponentHealth] = useState(enemyStats.maxHealth)
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth)
    const [announcerMessage, setAnnouncerMessage] = useState('')


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
                onAttack={() => {console.log('Attack')}}
                onAttack2={() => {console.log('Attack2')}}
                onAttack3={() => {console.log('Attack3')}}
                onHeal={() => {console.log('Heal')}}
                />
            </div>
        </div>
    )
}

export default Game;