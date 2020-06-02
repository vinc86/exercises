"use strict";

// SWITCH/CASE

const playFizzBuzz = (num) => {

    let isDivisible3 = (num % 3) === 0;
    let isDivisible5 = (num % 5) === 0;
    let isDivisible4Both = ((num % 3) === 0 && (num % 5) === 0);
    let message = null;

    if (num > 0) {

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
                message = num;
                break;

        }

    } else {
        console.log("Insert a proper number!");
    }


    return message;
}

console.log(playFizzBuzz(0));



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
    console.log(num);
}