import { useNavigate } from "react-router-dom";
import './EndGame.css'
import { characters } from "../../shared/Characters";
import { useEffect } from "react";


const EndGame = ({ setPlayerWins, playerWins, winner}) => {
    const navigate = useNavigate();
    const aiWinner = winner
   
    useEffect(() => {
        setPlayerWins(playerWins + 1)
    }, [])
    const endGameButtonClicked = () => {
        reset()
        navigate('/')
        navigate('/submitHighScore')
    }
    function levelUp() {
        Object.values(characters).forEach(char => {
          char.level++;
        });
      }
      function reset() {
        Object.values(characters).forEach(char => {
          char.level = 0;
        });
      }

    const continueButton = () => {
        levelUp();
        navigate('/selectCharacter');
    };

    if(!winner){
        
        return(
            <div className="EndGame">
                <p>You lose {aiWinner.name}!</p>
                <button className="endGame-button" onClick={endGameButtonClicked}>End Game?</button>
            </div>    
        )
    }

    return (
            <div className="EndGame">
                <p>Congratulations {winner.winner.name}!</p>
                <p>You have {playerWins} win!</p>
                <button className="continue-button" onClick={continueButton}>Continue?</button>
                <button className="endGame-button" onClick={endGameButtonClicked}>End Game?</button>
            </div>    
    )
}
export default EndGame;