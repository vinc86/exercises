"use strict";
// task 1
console.log("Task 1:");
let num1 = 50;
let num2 = 79;
if (num1 >= 50 && num1 <= 99 && num2 >= 50 && num2 <= 99) {
  console.log(true);
} else {
  console.log(false);
}

// task 2
console.log("Task 2:");
let num3 = 120;
let num4 = 65;
let num5 = 30;

if (
  (num3 >= 50 && num3 <= 99) ||
  (num4 >= 50 && num4 <= 99) ||
  (num5 >= 50 && num5 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}

// task 3
console.log("Task 3:");
let a = 56;
let b = 50;
let c = 70;

if (a > b && a > c) {
  console.log(`A (${a}) is the biggest!`);
} else if (b > a && b > c) {
  console.log(`B (${b}) is the biggest!`);
} else if (c > b && c > a) {
  console.log(`C (${c}) is the biggest!`);
} else {
  console.log("Write different value for each number!");
}

// task 4

console.log("Task 4:");
let string = "Python";

if (string.includes("Py")) {
  console.log(string);
} else {
  console.log('The string doesn\'t include "Py"!');
}

// task 5

console.log("task 5:");
//the sum of which integers?
let int1 = 20;
let int2 = 75;

if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// task 6

console.log("Task 6:");

int1 = 18;
int2 = 10;
if (int1 + int2 === 8 || int1 - int2 === 8) {
  console.log(true);
} else {
  console.log(false);
}

// task 7

console.log("Task 7:");
int1 = 7;
int2 = 10;
if (int1 === 15 || int2 === 15 || int1 + int2 === 15) {
  console.log(true);
} else {
  console.log(false);
}

// task 8

console.log("Task 8:");
int1 = 17;
int2 = 20;

if (int1 % 7 === 0 || int1 % 11 === 0 || int2 % 7 === 0 || int2 % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// task 9

console.log("Task 9:");

int1 = 4;
int2 = 4;

if (int1 === int2) {
  console.log((int1 + int2) * 3);
} else {
  console.log(int1 + int2);
}

// task 10

console.log("Task 10:");
int1 = 4;
const FIXED_19 = 19;

if (int1 > FIXED_19) {
  console.log((int1 - FIXED_19) * 2);
} else {
  console.log(int1 - FIXED_19);
}

// task 11

console.log("BONUS TASK 11:");
let firstName = "Vincenzo";
let age = 35;

if (age < 13) {
  console.log(`${firstName} is a child!`);
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager!`);
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult!`);
} else {
  console.log(`${firstName} is an adult!`);
}

// task 12

console.log("BONUS TASK 12:");

/* to be continued.... */
