import './Game.css'
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import { enemyStats, playerStats } from '../../shared/Characters'
import BattleMenu from '../BattleMenu/BattleMenu'

const Game = () => {
    const [opponentHealth, setOpponentHealth] = [enemyStats.maxHealth]
    const [playerHealth, setPlayerHealth] = [playerStats.maxHealth]

    return (
        <game>
            <div>
                <PlayerSummary 
                health={playerHealth} 
                name={playerStats.name} 
                level={playerStats.level} 
                maxHealth={playerStats.maxHealth} 
                className='playerSummary' main={false} />
            </div>
            <div className='characters-vs-sign' >
                {playerStats.name} vs {enemyStats.name}
            </div>
            <div className='player-characters'>
                <img className='character-imgs' src={playerStats.img} alt={playerStats.name} />
            </div>
            <div className='enemy-characters'>
                <img className='character-imgs' src={enemyStats.img} alt={enemyStats.name} />
            </div>
            <div>
                <PlayerSummary 
                health={opponentHealth} 
                name={enemyStats.name} 
                level={enemyStats.level} 
                maxHealth={enemyStats.maxHealth} 
                className='AiSummary' main={true}/>
            </div>
            <div className='hud'>
                <BattleMenu className='battle-menu'
                onAttack={() => {console.log('Attack')}}
                onAttack2={() => {console.log('Attack2')}}
                onAttack3={() => {console.log('Attack3')}}
                onHeal={() => {console.log('Heal')}}
                
                />
            </div>
        </game>
    )
}

export default Game;