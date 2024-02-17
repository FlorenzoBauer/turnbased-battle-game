const wait = ms =>
 new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, ms)
})

const attack = ({attacker, receiver}) => {
    const recievedDamage = attacker.attack - (attacker.level - receiver.level) *1.25
    const finalDamage = recievedDamage - receiver.defense / 2

    return finalDamage;
}

const magic = ({attacker, receiver}) => {
    const recievedDamage = attacker.magic - (attacker.level - receiver.level) *1.25
    const finalDamage = recievedDamage - receiver.magicDefense / 2

    return finalDamage;
}

const heal = ({user}) => {
    return user.magic + user.level * .25
}

export default { wait, attack, magic, heal };