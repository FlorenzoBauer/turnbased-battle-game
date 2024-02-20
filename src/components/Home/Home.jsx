import './Home.css'
import characterImage from '../../assets/dashketchup.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const navGame = () => {
        navigate('/selectCharacter')
    }
    const navHighScore = () => {
        navigate('/highscore')
    }
    const navSettings = () => {
        navigate('/settings')
    }
    const navEndGame = () => {
    navigate('/endGame')
    }
    
    return (
        <main className="Home">
            <h1>Battle Pals</h1>
            <div className='charactersContainer'>
            
            <img className='dashketchup' src={characterImage} alt="Character Image"/>
            </div>
            <button className='startButton' onClick={navGame}>Start Game</button>
            <button className='highScoreButton' onClick={navHighScore}>High Scores</button>
            <button className='settingsButton'>Settings</button>
            <h3>Florenzo, Matt, Gavin 2024</h3>
        </main>
    )}

    export default Home;