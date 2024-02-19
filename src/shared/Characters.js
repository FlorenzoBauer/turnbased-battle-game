import angryCloudSprite from '../assets/angrycloudsprite.png';
import squirreldemonsprite from '../assets/squirreldemonsprite.png';


export const playerStats = {
    level: 1,
    maxHealth: 150,
    name : 'Test Character',
    img: angryCloudSprite,
    attacks: [
        {
            name: 'attack1',
            damage: 20
        },
        {
            name: 'attack2',
            damage: 30
        },
        {
            name: 'attack3',
            damage: 40
        },
        {
            name: 'heal',
            damage: -40
        }
    ],
    defense: 20
}
export const enemyStats = {
    level: 1,
    maxHealth: 150,
    name : 'Test Enemy',
    img: squirreldemonsprite,
    attacks: [
        {
            name: 'attack1',
            damage: 20
        },
        {
            name: 'attack2',
            damage: 30
        },
        {
            name: 'attack3',
            damage: 40
        },
        {
            name: 'heal',
            damage: -40
        }
    ],
    defense: 20,
}