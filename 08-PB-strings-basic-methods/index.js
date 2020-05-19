"use strict";
// task 1

let string = "I can walk in the park all day!";
console.log(`Task 1: ${string.substring(18, 22)}`);

// task 2

let hello = "Hello World";
console.log(`Task 2: ${hello.toUpperCase()}`);

// task 3

let helloTwo = "Hello Earthling";
console.log(`Task 3: ${helloTwo.toLowerCase()}`);

// task 4

let jS = "JavaScript";
console.log(`Task 4: ${jS.substring(3, 6)}`);

// task 5

let stringTwo = "nice shoes";
console.log(`Task 5a: contains "l" -> ${stringTwo.includes("l")}`);
console.log(`Task 5b: contains "n" -> ${stringTwo.includes("n")}`);

// task 6

let firstString = "This is not a normal String";
let customString = firstString[0] + firstString + firstString[0];
console.log(`Task 6: ${customString}`);

// task 7

let secondString = "don't forget use strict";
let lastThree = secondString.substring(20, 23);
let customSecondString = lastThree + secondString + lastThree;
console.log(`Task 7 : ${customSecondString}`);

// task 8

let thirdString = "the pen is on the table";
let middleString = thirdString.substring(1, 22);
let strangeString = thirdString[22] + middleString + thirdString[0];

console.log(`Task 8: ${strangeString}`);

// task 9

let firstName = "Vincenzo";
let age = "34";
let city = "Rome";

console.log(
  `Task 9: My name is ${firstName}, i am ${age} years old. I am born in ${city}`
);

// task 10

let anotherString = "the quick brown fox";
let firstLetter = anotherString[0].toUpperCase();
anotherString = anotherString.substring(1);
console.log(`Task 10: ${firstLetter + anotherString}`);
