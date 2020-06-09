"use strict";


console.log("Task 1:");
(function printNumbers(a, b) {
    if ((typeof a !== "number") || (typeof b !== "number")) {
        console.log("Expecting numbers as parameters!");
    } else {
        let result = null;
        for (let i = 1; i <= b; i++) {
            result = Math.pow(a, i)
            console.log(result);
        }
    }

})(2, 8);

///////////////////////////////////////////

console.log("Task 2:");

let fruit = "peach";

const printFavoriteFruit = (value) => {
    fruit = "banana";
    console.log(`My favorite fruit is: ${value}`);

}

printFavoriteFruit(fruit);

///////////////////////////////////////////


console.log("Task 3:");

const exponent = (a, b) => {
    let result = null;
    result = a ** b;
    console.log(result);
}

exponent(2, 4);

/* 
is not possible to access the result variable outside the function;
Because it is declared in the function scope.

*/