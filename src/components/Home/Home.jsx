import './Home.css'
import { playerStats } from '../../shared/Characters';
import characterImage from '../../assets/dashketchup.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const navGame = () => {
        navigate('/game')
    }
    const navHighScore = () => {
        navigate('/highscore')
    }
    const navSettings = () => {
        navigate('/settings')
    }
    
    return (
        <main className="Home">
            <h1>Battle Pals</h1>
            <div className='charactersContainer'>
            <img className='character-imgs' src={playerStats.img} alt={playerStats.name} />
            <img className='dashketchup' src={characterImage} alt="Character Image"/>
            </div>
            <button className='startButton' onClick={navGame}>Start Game</button>
            <button className='highScoreButton' onClick={navHighScore}>High Scores</button>
            <button className='settingsButton'>Settings</button>
            <h3>Florenzo, Matt, Gavin 2024'</h3>
        </main>
    )}

    export default Home;