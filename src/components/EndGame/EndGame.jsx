import { useNavigate } from "react-router-dom";
import './EndGame.css'
import { characters } from "../../shared/Characters";
import { useEffect } from "react";


const EndGame = ({ setPlayerWins, playerWins, loser, winner }) => {
    const navigate = useNavigate();
    console.log('winner: ', winner)
    console.log('loser: ', loser)
  
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
  
    if (!winner) {
      return (
        <div className="EndGame">
          <p>You lose {loser.name}! Try again?</p>
          <button className="endGame-button" onClick={endGameButtonClicked}>
            End Game?
          </button>
        </div>
      );
    }
  if(!loser) {

    return (
      <div className="EndGame">
        <p>Congratulations {winner.name}!</p>
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
  return(
    <h1>Error</h1>
  )
  
}
  export default EndGame;
  