import { useNavigate } from "react-router-dom";
import './EndGame.css'
import { characters } from "../../shared/Characters";
import { useEffect } from "react";


const EndGame = ({ setPlayerWins, playerWins, setWinner, winner }) => {
    const navigate = useNavigate();
    const aiWinner = winner;
  
    useEffect(() => {
      setPlayerWins(playerWins + 1);
    }, []);
  
    const endGameButtonClicked = () => {
      reset();
      navigate('/submitHighScore');
    };
  
    function levelUp() {
      Object.values(characters).forEach(char => {
        char.level++;
      });
    }
  
    function reset() {
      Object.values(characters).forEach(char => {
        char.level = 1;
      });
    }
  
    const continueButton = () => {
      levelUp();
      navigate('/selectCharacter');
    };
  
    if (!winner || !winner.winner) {
      return (
        <div className="EndGame">
          <p>You lose {aiWinner ? aiWinner.name : 'AI'}!</p>
          <button className="endGame-button" onClick={endGameButtonClicked}>
            End Game?
          </button>
        </div>
      );
    }
  
    return (
      <div className="EndGame">
        <p>Congratulations {winner.winner.name}!</p>
        <p>You have {playerWins} win!</p>
        <button className="continue-button" onClick={continueButton}>
          Continue?
        </button>
        <button className="endGame-button" onClick={endGameButtonClicked}>
          End Game?
        </button>
      </div>
    );
  };
  
  export default EndGame;
  