import './HealthBar.css'

const HealthBar = ({label, health, maxHealth}) => {
    
    return (
        <div className="healthBar">
            <label className='label'>{label}</label>
            <progress className='bar' value={health} max={maxHealth}></progress>
        </div>
    )

}

export default HealthBar;