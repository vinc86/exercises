"use strict";
// task 1

console.log(`Task 1a: ${Math.min(-1, 4)}`);
console.log(`Task 1b: ${Math.max(-1, 4)}`);

// task 2

let numOne = Math.ceil(3321.32321);
let numTwo = Math.ceil(326.76);
let numThree = Math.ceil(76788.7);
let numFour = Math.ceil(-9.78);
let numFive = Math.ceil(43.342);
console.log(`Task 2a: ${numOne} ${numTwo} ${numThree} ${numFour} ${numFive}`);

let numOneB = Math.floor(3321.32321);
let numTwoB = Math.floor(326.76);
let numThreeB = Math.floor(76788.7);
let numFourB = Math.floor(-9.78);
let numFiveB = Math.floor(43.342);

console.log(
  `Task 2b: ${numOneB} ${numTwoB} ${numThreeB} ${numFourB} ${numFiveB}`
);
/* const roundUp = [3321.32321, 326.76, 76788.7, -9.78, 43.342];

for (let i = 0; i < roundUp.length; i++) {
  console.log(Math.ceil(roundUp[i]));
} */

// just for test

// task 3

let randomize = Math.ceil(Math.random() * 6);
console.log(`Task 3: The Dice says ---> ${randomize}`);
