import './Game.css'

const Game = () => {
    return (
        <div>

            <div>
                <PlayerSummary className='playerSummary' main={false} />
            </div>
            <div>
                <PlayerSummary className='AiSummary' main={true}/>
            </div>

        </div>
    )
}