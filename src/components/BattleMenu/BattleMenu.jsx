import './BattleMenu.css'

const BattleMenu = ({onAttack1, onAttack2, onAttack3, onHeal}) => {
    return (
        <div className="battle-menu">
        <button onClick={onAttack1} className="battle-menu__button">Attack1</button>
        <button onClick={onAttack2} className="battle-menu__button">Attack2</button>
        <button onClick={onAttack3} className="battle-menu__button">Attack3</button>
        <button onClick={onHeal} className="battle-menu__button">Heal</button>
        </div>
    )
    }
    export default BattleMenu;