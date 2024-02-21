import { useState, useEffect, useReducer } from 'react';
import { attack1, attack2, attack3, heal, wait } from '../shared/Helpers.jsx';

const initialState = {
  turn: 0,
  inSequence: false,
  playerHealth: 10,
  opponentHealth: 10,
  announcerMessage: '',
};

const battleReducer = (state, action) => {
  switch (action.type) {
    case 'startSequence':
      return { ...state, inSequence: true, announcerMessage: action.message };
    case 'endSequence':
      return { ...state, inSequence: false, announcerMessage: action.message };
      case 'updateHealth':
  console.log('Damage in updateHealth:', action.damage);
  const updatedPlayerHealth = state.playerHealth - (action.turn === 0 ? action.damage : 0);
  const updatedOpponentHealth = state.opponentHealth - (action.turn === 1 ? action.damage : 0);

  console.log('Updated Player Health:', updatedPlayerHealth);
  console.log('Updated Opponent Health:', updatedOpponentHealth);

  return {
    ...state,
    playerHealth: Math.max(0, updatedPlayerHealth),
    opponentHealth: Math.max(0, updatedOpponentHealth),
  };

    case 'changeTurn':
      return { ...state, turn: state.turn === 0 ? 1 : 0, announcerMessage: action.message };
    default:
      return state;
  }
};

export const useBattleSequence = ({ playerStats = { maxHealth: 0 }, enemyStats = { maxHealth: 0 }, sequence }) => {
  const [state, dispatch] = useReducer(battleReducer, initialState);

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? playerStats : enemyStats;
      const receiver = turn === 0 ? enemyStats : playerStats;

      console.log('Attacker:', attacker);
      console.log('Receiver:', receiver);

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
            dispatch({ type: 'endSequence', message: `Now it's ${receiver.name}'s turn` });
            await wait(2000);
            dispatch({ type: 'changeTurn', message: '' });
          })();
          break;
        }
        case 'heal': {
          const recovered = heal({ receiver: attacker });
          console.log('Recovered:', recovered);

          (async () => {
            dispatch({ type: 'startSequence', message: `${attacker.name} heals for ${recovered} health` });
            await wait(3000);
            dispatch({ type: 'updateHealth', damage: recovered, turn });
            dispatch({ type: 'endSequence', message: `Now it's ${receiver.name}'s turn` });
            await wait(2000);
            dispatch({ type: 'changeTurn', message: '' });
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
