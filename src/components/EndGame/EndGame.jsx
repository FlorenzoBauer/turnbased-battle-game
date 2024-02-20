import { useNavigate } from "react-router-dom";
import './EndGame.css'


const EndGame = ({winner}) => {
    const navigate = useNavigate();

    const endGameButtonClicked = () => {
        navigate('/')
    }

    console.log(winner)

    return (
            <div className="EndGame">
                <p>Congratulations {winner.winner.name}!</p>
                <button className="continue-button">Continue?</button>
                <button className="endGame-button" onClick={endGameButtonClicked}>End Game?</button>
            </div>    
    )
}
export default EndGame;