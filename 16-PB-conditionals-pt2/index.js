"use strict";


let markMass = 75;
let markHeight = 1.75

let johnMass = 84;
let johnHeight = 1.77

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

let highestBMI = markBMI > johnBMI ? true : false;

console.log(`Is Mark's BMI higher than John's? It's ${highestBMI}`);

if (markBMI > johnBMI) {
    console.log(
        `Mark have the highest BMI with: ${Math.round(markBMI)}`
    );
} else {
    console.log(
        `John have the highest BMI with: ${Math.round(johnBMI)}`
    );
}



/* const BMI = (mass, height) => {
    let result = mass / (height * height);
    return result;
}

let johnBMI = Math.round(BMI(75, 1.75));
let markBMI = Math.round(BMI(84, 1.77)); */