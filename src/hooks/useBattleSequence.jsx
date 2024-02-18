import { useState, useEffect } from 'react'
import { enemyStats, playerStats } from '../shared/Characters';
import { attack } from '../shared/Helpers'
import { wait } from '../shared/Helpers'

export const useBattleSequence = sequence => {
const [turn, setTurn] = useState(0);
const [inSequence, setInSequence] = useState(false);
const [opponentHealth, setOpponentHealth] = useState(enemyStats.maxHealth)
const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth)
const [announcerMessage, setAnnouncerMessage] = useState('')

    useEffect(() => {
        const { mode, turn } = sequence;

        if(mode) {
            const attacker = turn == 0 ? playerStats : enemyStats;
            const receiver = turn == 0 ? enemyStats : playerStats;

            switch (mode) {
                case 'attack':
                 const damage = attack({ attacker, receiver });

                 (async () => {
                    setInSequence(true);
                    setAnnouncerMessage(`${attacker.name} has chosen to attack!`);
                    await wait(1000);

                    turn === 0 ?
                    setOpponentHealth(h => (h - damage > 0 ? h - damage : 0)) :
                    setPlayerHealth(h => (h - damage > 0 ? h - damage : 0))
                 await wait(1000);

                    setAnnouncerMessage(`Now it's ${receiver.name}'s turn.`)
                 await wait(1500)  

                 setTurn(turn === 0 ? 1 : 0); 
                 setInSequence(false)
                 })();

                 
                break;

              default:
                break;
            }
        }
    },[sequence])

    return {
        turn,
        inSequence,
        opponentHealth,
        playerHealth,
        announcerMessage
    }
}; 