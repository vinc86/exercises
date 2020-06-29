"use strict";

//1. Combining Arrays
console.log("1. Combining Arrays:");

const euroCountries = ["italy", "spain", "france", "germany"];
const asianCountries = ["japan", "cina", "india", "singapore"];

for (let country of asianCountries) {
    euroCountries.push(country);
}

let arrayOne = ["car", "bike", "underground"];
let arrayTwo = ["banana", "peach", "strawberry"];
let arrayThree = [];

// method 1
for (let element of arrayOne) {
    arrayThree.push(element);
}
for (let element of arrayTwo) {
    arrayThree.push(element);
}

// method 2
let arrayFour = [...arrayOne, ...arrayTwo];

console.log("first result: ", euroCountries);
console.log("second result: ", arrayThree);
console.log("third result: ", arrayFour);
////////////////////////////////////////////

//2. Copying Arrays
console.log("\n2. Copying Arrays:")
let otherArray = ["coding", "is", "fun"];
let copiedArray = [...otherArray];

console.log(copiedArray);

///////////////////////////////////////////

// 3. Find the Largest
console.log("\n3. Find the Largest:");

let numbers = ["3", "4", "7", "10"];

const checkLargestNum = array => {



}