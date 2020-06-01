"use strict";

// SWITCH/CASE

const playFizzBuzz = (num) => {

    let isDivisible3 = (num % 3) === 0;
    let isDivisible5 = (num % 5) === 0;
    let isDivisible4Both = ((num % 3) === 0 && (num % 5) === 0);
    let message = null;

    switch (true) {
        case isDivisible4Both:
            message = "FizzBuzz";
            break;
        case isDivisible3:
            message = "Fizz";
            break;
        case isDivisible5:
            message = "Buzz";
            break;
        default:
            message = "Try Again!";
            break;

    }

    return message;
}

console.log(playFizzBuzz(5));



// IF STATEMENT

let num = 15;
let isDivisible3 = (num % 3) === 0;
let isDivisible5 = (num % 5) === 0;
let isDivisible4Both = ((num % 3) === 0 && (num % 5) === 0);

if (isDivisible4Both === true) {
    console.log("FizzBuzz");
} else if (isDivisible3 === true) {
    console.log("Fizz");
} else if (isDivisible5 === true) {
    console.log("Buzz");
} else {
    console.log("Try Again!");
}