import angryCloudSprite from '../assets/angrycloudsprite.png';
import squirreldemonsprite from '../assets/squirreldemonsprite.png';

export const characters = {
    angryCloudSprite: {
        level: 1,
        maxHealth: 150,
        name: 'Angry Cloud Sprite',
        img: angryCloudSprite,
        attacks: [
            { name: 'attack1', damage: 20 },
            { name: 'attack2', damage: 30 },
            { name: 'attack3', damage: 480 },
            { name: 'heal', damage: -40 }
        ],
        defense: 20
    },
    squirreldemonsprite: {
        level: 1,
        maxHealth: 150,
        name: 'Squirrel Demon Sprite',
        img: squirreldemonsprite,
        attacks: [
            { name: 'attack1', damage: 20 },
            { name: 'attack2', damage: 30 },
            { name: 'attack3', damage: 480 },
            { name: 'heal', damage: -40 }
        ],
        defense: 20
    }
};
