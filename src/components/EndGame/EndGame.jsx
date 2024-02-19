import { useNavigate } from "react-router-dom";

const EndGame = ({winner}) => {
    
    return (
            <div>Congratulations ${winner.name}</div>    
    )
}
export default EndGame;