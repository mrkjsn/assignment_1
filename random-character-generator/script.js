//character object
let character = {
    name: "Hero",
    health: 100,
    class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"],
    randomizedHealth: function () {
        return Math.floor(Math.random() * 101) + 50;
    },
    specialAbility: ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"],
};

//generateCharacter function and pass a name
function generateCharacter(name) {
    let names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

    // this function will return this object
    return {
        name: name != null ? name : names[Math.floor(Math.random() * names.length)],
        class: character.class[Math.floor(Math.random() * character.class.length)],
        health: character.randomizedHealth(),
        specialAbility:  character.specialAbility[Math.floor(Math.random() * character.specialAbility.length)],
        battle: function (character2) {
            let previousHealth = character2.health;
            character2.health -= Math.floor(Math.random() * 16) + 5;
            console.log(`Character ${this.name} attacked Character ${character2.name} with ${this.specialAbility}. ${character2.name}'s health dropped from ${previousHealth} to ${character2.health}`);
        }, 
    }
};

let character1 = generateCharacter("Zane");
let character2 = generateCharacter("Elara");
character1.battle(character2); 

//use to generate multiple characters
function generateMultipleCharacters (num) {
    let characters = [];
    for(i=1; i<=num; i++) {
        characters.push(generateCharacter());
    }
    return characters;
};

let party = generateMultipleCharacters(5);
console.log(party);