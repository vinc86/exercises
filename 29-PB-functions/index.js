"use strict";

// 1.Add Up

const addUp = num => {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = result + i;
    }
    return result;
}

console.log("task 1:");
const add4 = addUp(4);
console.log(add4);
const add13 = addUp(13);
console.log(add13);
const add600 = addUp(600);
console.log(add600);

/////////////////////////////////////////////////

// 2. Cubed

console.log("task 2:");

const cubed = (num1 = 0, num2 = 0, num3 = 0) => (num1 ** 3) + (num2 ** 3) + (num3 ** 3);

let newCubed = cubed(2, 3);

console.log(newCubed);

//////////////////////////////////////////////////

// 3. String Check

console.log("task 3:");

let myWord = "ba";
let myString = "button";

const stringCheck = (word, string) => {
    if (string.startsWith(word)) {
        return true;
    } else {
        return false;
    }

}

let checkOne = stringCheck(myWord, myString);
console.log(checkOne);

//////////////////////////////////////////////////

// 4. Less Than or Equal to Zero?

console.log("task 4:");

const compareZero = num => {
    let message = "";
    if (isNaN(num)) {
        message = "Please type only numbers!";
    } else {
        if (num <= 0)
            message = "Less or equal to 0?: " + true;
        else
            message = "Less or equal to 0?: " + false;
    }
    return message;
}

let compareFirst = compareZero("3");
console.log(compareFirst);

//////////////////////////////////////////////////

// 5.  Count Occurrences

console.log("task 5:");

let stringToCheck = "this is a striiiiiing";
let letterToCheck = "i";
const countOccurrence = (string, letter) => {
    let result = 0;
    if (string.includes(letter)) {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] === letter) {
                result += 1;
            };

            /* return `contains: ${string.replace(/[^letter]/g, "").length} ${letter}`; */
        }
        return `contains: ${result} ${letter}`;
    } else {
        return `Your string does not contains ${letter}`;
    }
}

let firstCheck = countOccurrence(stringToCheck, letterToCheck);

console.log(firstCheck);