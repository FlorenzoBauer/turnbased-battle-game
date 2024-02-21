export const wait = ms =>
new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, ms)
})

export const attack1 = ({attacker, receiver}) => {
    const recievedDamage = attacker.attacks[0].damage - (attacker.level - receiver.level) *1.25
    const finalDamage = recievedDamage - receiver.defense / 2

    return finalDamage;
}

export const attack2 = ({attacker, receiver}) => {
    const recievedDamage = attacker.attacks[1].damage - (attacker.level - receiver.level) *1.25
    const finalDamage = recievedDamage - receiver.defense / 2

    return finalDamage;
}
export const attack3 = ({attacker, receiver}) => {
    const recievedDamage = attacker.attacks[2].damage - (attacker.level - receiver.level) *1.25
    const finalDamage = recievedDamage - receiver.defense / 2

    return finalDamage;
}


export const heal = ({receiver}) => {
    return receiver.level * 10
}