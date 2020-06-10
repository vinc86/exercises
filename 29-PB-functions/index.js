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

let stringToCheck = "this is a string";
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

/////////////////////////////////////////////////

// 6. X To The Power of X

console.log("task 6:");

const calculateBaseToExponent = (num, exp) => {
    return num ** exp;
}

console.log(calculateBaseToExponent(5, 5)); // ➞ 3125
console.log(calculateBaseToExponent(10, 10)); // ➞ 10000000000
console.log(calculateBaseToExponent(3, 3)); // ➞ 27

////////////////////////////////////////////////////////////

// 7. Dog Years

console.log("task 7:");

const dogAge = num => {
    let result = 0;
    if (typeof num === "number") {
        result = num * 7;
        return `Your doggo is ${result} years old in human years!`
    } else {
        return "Please enter a valid number!"
    }

}

console.log(dogAge(4)); // ➞ "Your doggo is 28 years old in human years!"

///////////////////////////////////////////////////

// 8. A Lifetime Supply

console.log("task 8:");



function calcSupply(age, dailyAmount) {
    const maxAge = 80;
    let foodTotal = (dailyAmount * 365) * (maxAge - age);
    return `You will need ${foodTotal} pieces of your snack (${dailyAmount} a day) to last you till the age of ${maxAge}.`;
}

console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));
//////////////////////////////////////////////////

// 9. Where's Waldo?

console.log("task 9:");

const isWaldoHere = (string) => {
    let myString = string.toLowerCase();

    if (myString.includes("waldo")) {
        return true;
    } else {
        return false;
    }
}


console.log(isWaldoHere("is there wal here ?")); // ➞ false
console.log(isWaldoHere("I found you Waldo!")); // ➞ true
console.log(isWaldoHere("is wally here?")); // ➞ false
console.log(isWaldoHere("waldo is here")); // ➞ true

/////////////////////////////////////////////////////////////

// 10. Pie


console.log("task 10:");
const equalSlices = (totSlices, recipients, singleSlices) => {

    let sumSlices = recipients * singleSlices;

    if (sumSlices <= totSlices) {
        return true;
    } else {
        return false;
    }

}



console.log(equalSlices(11, 5, 3)); //false
console.log(equalSlices(8, 3, 2)); //true
console.log(equalSlices(8, 3, 3)); //false
console.log(equalSlices(24, 12, 2)); //true


///////////////////////////////////////////////

// 11. XO 
console.log("task 11:")
const checkXandO = (string) => {
    let myString = string.toLowerCase();

    let checkX = myString.includes("x");
    let checkO = myString.includes("o");
    let sumX = 0;
    let sumO = 0;
    if (checkX || checkO) {
        for (let i = 0; i <= myString.length; i++) {
            if (myString[i] === "x") {
                sumX += 1;
                //  console.log(`sumX: ${sumX}`); 
            } else if (myString[i] === "o") {
                sumO += 1;
                // console.log(`sumO: ${sumO}`); 
            }
        }
    }

    if (sumX === sumO) {
        return true;
    } else {
        return false;
    }
}

console.log(checkXandO("ooxx")); // ➞ true
console.log(checkXandO("xooxx")); //➞ false
console.log(checkXandO("ooxXm")); // ➞ true (case insensitive)
console.log(checkXandO("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(checkXandO("zzoo")); //➞ false

/////////////////////////////////////////////////////////

// 12. isPrime?

console.log("task 12:");

const isPrime = number => {
    if (number == 1 || number == 2) {
        return true;
    } else {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }

    }

    return true;

}



console.log(isPrime(7)); // ➞ true
console.log(isPrime(9)); // ➞ false
console.log(isPrime(10)); // ➞ false


///////////////////////////////////////////////////

// 13. Validate Email
console.log("task 13:");

const checkValidEmail = email => {

    let hasAt = email.includes("@");
    let hasDot = email.includes(".");
    let checkStart = email.startsWith("@");
    let message = "";
    if (!hasAt || !hasDot) {
        message = "Your email is not valid!";
    } else if (checkStart) {
        message = "Your email can't start with @!";
    } else {


        let checkAfterAt = email.substring(email.lastIndexOf("@") + 1, email.lastIndexOf(".com"));

        if (email.startsWith(checkAfterAt)) {
            message = "Invalid email!";
        } else {
            message = "Valid Email!";
        }
    }
    return message;
}


console.log(checkValidEmail("johnex@ample.com")); // valid
console.log(checkValidEmail("@example.com")); // invalid
console.log(checkValidEmail("john.smith@email.com")); // valid
console.log(checkValidEmail("john.smith@.com")); // invalid