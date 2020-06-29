"use strict";

//1. Array Destructuring
console.log("1. Array Destructuring:");

let [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit, vegetable, food);

/////////////////////////////////////////////

// 2.Object Destructuring
console.log("\n2.Object Destructuring:");


/* let {
    tom
} = {
    tom: "mummy"
};
console.log(tom); */

const halloweenPeople = {
    fran: "witch",
    matt: "troll",
    tom: "mummy"
}

const {
    tom,
    fran,
    matt
} = halloweenPeople;

console.log(tom);
console.log(fran);
console.log(matt);

/////////////////////////////////////

//3. Parameters: Object Destructuring
console.log("\n3. Parameters: Object Destructuring:");

let {
    name,
    hit,
    nationality,
    genre
} = {
    name: "muse",
    hit: "uprising",
    nationality: "united kingdom",
    genre: "alternative rock"
};

const displayBandData = (bandName, bandHit, bandNat, bandGnr) => {
    return `The ${bandName} are an ${bandNat} band. The band sings ${bandGnr} and their greatest hit is "${bandHit}"`;
}

console.log(displayBandData(name, hit, nationality, genre));