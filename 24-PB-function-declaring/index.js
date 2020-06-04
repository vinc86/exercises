"use strict";
// task 1
function multiply() {
    let result = 3 * 4;
    return result;
}
// task 2
const multiply2 = function (a, b) {
    return a * b;
}

// task 3
const multiply3 = (a, b) => {
    return a * b;
}
// task 4

function checkRemainder1() {
    let result = 20 % 3;
    return result;
}

const checkRemainder2 = function (a, b) {
    let result = a % b;
    return result;
}

const checkRemainder3 = (a, b) => {
    let result = a % b;
    return result;
}

console.log(`
  Task 1: ${multiply()}
  Task 2: ${multiply2(5, 9)} 
  Task 3: ${multiply3(2, 4)}
  Task 4 ↓
         a: ${checkRemainder1()}
         b: ${checkRemainder2(30,6)}
         c: ${checkRemainder3(40,15)}
`);