"use strict";

// 1. Where Have My Four Letter Words Gone?

console.log("1. Where Have My Four Letter Words Gone?");

const isFourLetters = (array) => {

    let newArray = [];
    array.forEach((word) => {
        if (word.length === 4) {
            newArray.push(word);
        }
    });
    console.log("-----> ", newArray);
}


isFourLetters(["John", "James", "Jack", "Jeanne"]); // ➞ ["John", "Jack"]
isFourLetters(["Tomato", "Corn", "Lettuce"]); // ➞ ["Corn"]
isFourLetters(["Dog", "Cat", "Deer"]); // ➞ ["Deer"]

//////////////////////////////////////////////////////

// 2. Months.

console.log("2. Months:");

const checkMonth = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = "";
    const printMonthName = (num) => {
        switch (num) {
            case 1:
                month = months[0];
                break;
            case 2:
                month = months[1];
                break;
            case 3:
                month = months[2];
                break;
            case 4:
                month = months[3];
                break;
            case 5:
                month = months[4];
                break;
            case 6:
                month = months[5];
                break;
            case 7:
                month = months[6];
                break;
            case 8:
                month = months[7];
                break;
            case 9:
                month = months[8];
                break;
            case 10:
                month = months[9];
                break;
            case 11:
                month = months[10];
                break;
            case 12:
                month = months[11];
                break;
            default:
                month = "it's not a month!";
        }
        console.log("-----> ", month);
    }
    return printMonthName;

}

const monthName = checkMonth();
monthName(3); // ➞ "March"
monthName(12); // ➞ "December"
monthName(6); // ➞ "June"

//////////////////////////////////////

// 3. Amplify the Multiples of 4

console.log("3. Amplify the Multiples of 4:");

const amplify = (num) => {

    let firstSequence = [];
    let finalSequence = [];

    for (let i = 1; i <= num; i++) {
        firstSequence.push(i);
    }
    for (let number of firstSequence) {
        if (number % 4 === 0) {
            finalSequence.push(number * 10);
        } else {
            finalSequence.push(number);
        }

    }
    console.log("-----> ", finalSequence);

}


amplify(4); // ➞ [1, 2, 3, 40]
amplify(3); // ➞ [1, 2, 3]
amplify(25); // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

///////////////////////////////////////////////////////

// 4. One is not like the others... 

/* console.log("4. One is not like the others:");

const unique = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);


}
*/

function unique(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        } else {
            console.log("We found a double!" + array[i]);
        }
    }
}

unique([3, 3, 3, 7, 3, 3]); // ➞ 7
unique([0, 0, 0.77, 0, 0]); // ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]); // ➞ 0 

///////////////////////////////////////////

// 5. Word Ranking


///////////////////////////////////////////

// 6. c4n y0u r34d th15?
console.log("6. c4n y0u r34d th15?");
const hackerSpeak = string => {
    let hackerString = [];
    let stringSplit = string.split("");

    for (let char of stringSplit) {
        if (char === "a") {
            hackerString.push("4");
        } else if (char === "e") {
            hackerString.push("3");
        } else if (char === "i") {
            hackerString.push("1");
        } else if (char === "o") {
            hackerString.push("0");
        } else if (char === "s") {
            hackerString.push("5");
        } else {
            hackerString.push(char);
        }
    }
    return string + " -----> " + hackerString.join("");
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));

// ➞ "j4v45cr1pt 15 c00l"
// ➞ "pr0gr4mm1ng 15 fun"
// ➞ "b3c0m3 4 c0d3r"


///////////////////////////////////////

// Bonus Questions

// 1. Is it Symmetrical?
console.log("1. Is it Symmetrical?:");

/////////////////////////////////

// 2. snake_case ➞ camelCase
console.log("2. snake_case ➞ camelCase:");

const toCamelCase = string => {
    /*  let myString = string.split("_")[1];
     console.log(myString); */
    /* let myString = string.split("_")
   
    console.log(words);
    let camelString = [];
    for (let char of myString) {
        if (char === "_") {
            camelString.push(" ");
            
        } else {
            camelString.push(char);
        }
    }
    console.log(camelString.join("")); */
    string.replace()

}

toCamelCase("hello_world"); // ➞ "helloWorld"
toCamelCase("javascript_is_fun"); // ➞ "javaScriptIsFun"
///////////////////////////////////////////

// 3. Pig Latin Translation.

console.log("3. Pig Latin Translation:");