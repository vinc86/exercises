"use strict";

// 1.sumOfNumbers
console.log("1.sumOfNumbers:");

const arrayMath = (operation) => {
    let result = 0;

    // trough closures i can split the logic inside the main function depending of
    // the operation that i want to achieve.

    if (operation === "sum") { // first logic

        const sumNumbers = (array) => {

            array.forEach(num => {
                result += num;
            });
            return result;
        }
        return sumNumbers;

    } else if (operation === "multiply") { // second logic

        const multiplyNumbers = (array) => {

            array.forEach(num => {
                if (result === 0) {
                    // if result equals to 0 assign the first number of the array
                    result = num;
                } else {
                    // then multiply the other numbers consequently
                    result *= num;
                }
            });
            return result;
        }
        return multiplyNumbers;
    }

}

const myArray = [2, 4, 2];

// sum of numbers
const sumOfNumbers = arrayMath("sum");
console.log(sumOfNumbers(myArray));

// multiply numbers
const multiplyNumbers = arrayMath("multiply");
console.log(multiplyNumbers(myArray));

////////////////////////////////////////////////////////////

// 