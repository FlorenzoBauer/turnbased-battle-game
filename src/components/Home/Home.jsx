import './Home.css'
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
        <main className="home">
            <h1>Battle Pals</h1>
            <button className='startButton' onClick={navGame}>Start Game</button>
            <button className='highScoreButton' onClick={navHighScore}>High Scores</button>
            <button className='settingsButton'>Settings</button>
        </main>
    )}

    export default Home;