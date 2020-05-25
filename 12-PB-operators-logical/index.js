"use strict";

// task 0

let a = true;
let b = false;

// task 1
console.log("Task 1:");
console.log("-", a && b);
console.log("-", a || b);
console.log("-", !(a && b));

// task 2

let x = 12;
let y = 20;
let z = 45;
console.log(`Task 2: new variables ${x} ${y} ${z}`);

//task 3

console.log("Task 3:");
console.log("-", x > z && x > y);
console.log("-", x !== y);
console.log("-", z < y || z > x);
console.log("-", x === z || x !== y);
console.log("-", x >= 10 && y <= 10);
console.log("-", x * z < 100 || x * y > 100);
