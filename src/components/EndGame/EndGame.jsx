import { useNavigate } from "react-router-dom";
import './EndGame.css'
import { characters } from "../../shared/Characters";
import { useState, useEffect } from "react";


const EndGame = ({ setPlayerWins, playerWins ,setWinner, winner, loser}) => {
    const navigate = useNavigate();
    const aiWinner = winner
    const [initials, setInitials] = useState("");

    useEffect(() => {
        setPlayerWins(playerWins + 1)
    }, [])
    const endGameButtonClicked = () => {
        reset()
        setPlayerWins(0)
        navigate('/')
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

    const handleInitialsChange = (e) => {
        setInitials(e.target.value);
    };


    const handleSubmit = () => {
        const postData = {
            initials: initials,
            character: winner.name,
            wins: playerWins
        };

        fetch('http://localhost:3001/api/v1/highscores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(response => {
            if (response.ok) {
                console.log("Data successfully posted");
            } else {
                console.error("Failed to post data");
            }
        })
        .catch(error => console.error('Error:', error));
    };

    if(!winner){
        
        return(
            <div className="EndGame">
                <p>You lose {aiWinner.name}!</p>
                <input type="text" placeholder="Enter your initials" value={initials} onChange={handleInitialsChange} />
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                <button className="endGame-button" onClick={endGameButtonClicked}>End Game?</button>
            </div>    
        )
    }

    return (
            <div className="EndGame">
                <p>Congratulations {winner.name}!</p>
                <p>You have {playerWins} win!</p>
                <button className="continue-button" onClick={continueButton}>Continue?</button>
                <button className="endGame-button" onClick={endGameButtonClicked}>End Game?</button>
            </div>    
    )
}
export default EndGame;