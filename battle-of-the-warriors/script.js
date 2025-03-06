let warrior1 = {
    name: "Zeus",
    hp: 100,
    strength: 10,
    attack: function() {
        return Math.floor(Math.random() * warrior1.strength) + 1;
    }
};

let warrior2 = {
    name: "Thor",
    hp: 100,
    strength: 10,
    attack: function() {
        return Math.floor(Math.random() * warrior2.strength) + 1;
    }
};

for(let i=1; i<=10; i++) {
    console.log("=== Round ",i, " ===");
    
    let damage1 = warrior1.attack();
    let damage2 = warrior2.attack();

    warrior2.hp -= damage1;

    console.log(`${warrior1.name} attacks ${warrior2.name} and does ${damage1} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);
    console.log("\n");

    warrior1.hp -= damage2;

    console.log(`${warrior2.name} attacks ${warrior1.name} and does ${damage2} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);
    console.log("\n");

}

if ( warrior1.hp > warrior2.hp) {
    console.log(`${warrior1.name} WINS  the battle!`)
} else if(warrior1.hp < warrior2.hp) {
    console.log(`${warrior2.name} WINS  the battle!`)
} else {
    console.log("The battle is draw!")
}