import { useEffect, useReducer } from 'react';
import { attack1, attack2, attack3, heal, wait } from '../shared/Helpers.jsx';

const battleReducer = (state, action) => {
  switch (action.type) {
    case 'startSequence':
      return { ...state, inSequence: true, announcerMessage: action.message };
    case 'endSequence':
      return { ...state, inSequence: false, announcerMessage: action.message };
    case 'updateHealth':
      const updatedPlayerHealth = state.playerHealth - (action.turn === 1 ? action.damage : 0);
      const updatedOpponentHealth = state.opponentHealth - (action.turn === 0 ? action.damage : 0);

      return {
        ...state,
        playerHealth: Math.max(0, updatedPlayerHealth),
        opponentHealth: Math.max(0, updatedOpponentHealth),
      };
      case 'changeTurn':
        let newTurn;
        if (state.turn === 0) {
            newTurn = 1;
        } else {
            newTurn = 0;
        }
        return { ...state, turn: newTurn, announcerMessage: action.message };
    default:
        return state;
    
  }
};

const createInitialState = ([playerStats, enemyStats]) => {
  const initialState = {
    turn: 0,
    inSequence: false,
    playerHealth: playerStats.maxHealth,
    opponentHealth: enemyStats.maxHealth,
    announcerMessage: '',
  };
  return initialState;
};

export const useBattleSequence = ({ playerStats = { maxHealth: 0 }, enemyStats = { maxHealth: 0 }, sequence }) => {
    
    const [state, dispatch] = useReducer(battleReducer, [playerStats, enemyStats], createInitialState);
    
  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? playerStats : enemyStats;
      const receiver = turn === 0 ? enemyStats : playerStats;

      switch (mode) {
        case 'attack1':
        case 'attack2':
        case 'attack3': {
          const damage =
            mode === 'attack1' ? attack1({ attacker, receiver }) : mode === 'attack2' ? attack2({ attacker, receiver }) : attack3({ attacker, receiver });

          (async () => {
            dispatch({ type: 'startSequence', message: `${attacker.name} attacks ${receiver.name} for ${damage} damage` });
            await wait(3000);
            dispatch({ type: 'updateHealth', damage, turn });
            dispatch({ type: 'changeTurn', message: `Now it's ${receiver.name}'s turn` });
            await wait(2000);
            dispatch({ type: 'endSequence', message: '' });
          })();
          break;
        }
        case 'heal': {
          const recovered = heal({ receiver: attacker });

          (async () => {
            dispatch({ type: 'startSequence', message: `${attacker.name} heals for ${recovered} health` });
            await wait(3000);
            dispatch({ type: 'updateHealth', damage: recovered, turn });
            dispatch({ type: 'changeTurn', message: `Now it's ${receiver.name}'s turn` });
            await wait(2000);
            dispatch({ type: 'endSequence', message: '' });
          })();
          break;
        }
        default:
          break;
      }
    }
  }, [sequence, playerStats, enemyStats]);

  return state;
};
