import './Game.css'
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import { enemyStats, playerStats } from '../../shared/Characters'
const Game = () => {
    const [opponentHealth, setOpponentHealth] = [enemyStats.maxHealth]
    const [playerHealth, setPlayerHealth] = [playerStats.maxHealth]

    return (
        <div>

            <div>
                <PlayerSummary 
                health={40} 
                name={playerStats.name} 
                level={playerStats.level} 
                maxHealth={playerStats.maxHealth} 
                className='playerSummary' main={false} />
            </div>
            <div>
                <PlayerSummary 
                health={opponentHealth} 
                name={enemyStats.name} 
                level={enemyStats.level} 
                maxHealth={enemyStats.maxHealth} 
                className='AiSummary' main={true}/>
            </div>

        </div>
    )
}

export default Game;