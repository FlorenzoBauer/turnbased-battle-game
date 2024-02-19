import { useEffect, useState } from 'react'

export const useAIOpponent = turn => {
const [aiChoice, setAiChoice] = useState('')

    useEffect(() => {
        if(turn === 1) {
            const options = ['attack1', 'attack2', 'attack3', 'heal']
            setAiChoice(options[Math.floor(Math.random() * options.length)]);
            
        }

    }, [turn])


    return aiChoice;
};