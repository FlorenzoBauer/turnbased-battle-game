import { useState, useEffect } from 'react';
import { enemyStats, playerStats } from '../shared/Characters';
import { attack1, attack2, attack3, heal,  wait } from '../shared/Helpers.jsx';

export const useBattleSequence = sequence => {
const [turn, setTurn] = useState(0);
const [inSequence, setInSequence] = useState(false);
const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth)
const [opponentHealth, setOpponentHealth] = useState(enemyStats.maxHealth)
const [announcerMessage, setAnnouncerMessage] = useState('')

    useEffect(() => {
        const { mode, turn } = sequence;

        if (mode) {
            const attacker = turn === 0 ? playerStats : enemyStats;
            const receiver = turn === 0 ? enemyStats : playerStats;
      
            switch (mode) {
              case 'attack1': {
                const damage = attack1({ attacker, receiver });
                    
                    (async () => {
                        
                        setInSequence(true)
                        setAnnouncerMessage(`${attacker.name} attacks ${receiver.name} for ${damage} damage`)
                        await wait(3000)
                        turn === 0
                        ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                        : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0))
                        
                        setAnnouncerMessage(`Now it's ${receiver.name}'s turn`)
                        await wait(3000)
                        setTurn(turn === 0 ? 1 : 0)
                        setInSequence(false)
                    })()
                    
                    break;
                }
                    case 'attack2': {
                        const damage = attack2({ attacker, receiver });
                            
                            (async () => {
                                
                                setInSequence(true)
                                setAnnouncerMessage(`${attacker.name} attacks ${receiver.name} for ${damage} damage`)
                                await wait(3000)
                                turn === 0
                                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0))
                                
                                setAnnouncerMessage(`Now it's ${receiver.name}'s turn`)
                                await wait(3000)
                                setTurn(turn === 0 ? 1 : 0)
                                setInSequence(false)
                            })()
                            
                            break;
                }  
                case 'attack3': {
                    const damage = attack3({ attacker, receiver });
                        
                        (async () => {
                            
                            setInSequence(true)
                            setAnnouncerMessage(`${attacker.name} attacks ${receiver.name} for ${damage} damage`)
                            await wait(3000)
                            turn === 0
                            ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                            : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0))
                            
                            setAnnouncerMessage(`Now it's ${receiver.name}'s turn`)
                            await wait(3000)
                            setTurn(turn === 0 ? 1 : 0)
                            setInSequence(false)
                        })()
                        
                        break;
                    } 
                    case 'heal': {
                        const damage = heal({ attacker });
                            
                            (async () => {
                                
                                setInSequence(true)
                                setAnnouncerMessage(`${attacker.name} heals for ${damage} health`)
                                await wait(3000)
                                turn === 0
                                ? setOpponentHealth(h => (h + damage))
                                : setPlayerHealth(h => (h +  damage))
                                
                                setAnnouncerMessage(`Now it's ${receiver.name}'s turn`)
                                await wait(3000)
                                setTurn(turn === 0 ? 1 : 0)
                                setInSequence(false)
                            })()
                            
                            break;
                        }
            default:
                break;
            }
        }
    },[sequence])

    return {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        announcerMessage
    }
}; 