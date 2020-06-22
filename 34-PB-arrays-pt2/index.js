"use strict";

// 1. The Greater Numbers
console.log("1. The Greater Numbers:");
const findGreatest = (array, num) => {
    let result = "";
    for (let value of array) {

        if (value > num) {
            result += value + " ";
        }
    }
    console.log("-----> " + result);
}

findGreatest([3, 4, 5], 4); // ➞ 5
findGreatest([10, 20, 30], 12); // ➞ 20, 30
findGreatest([0, 10, 3], 4); // ➞ 10

//////////////////////////////////////////////////

// 2. For the longest word
console.log("2. For the longest word:");

const longestWord = (sentence) => {

    let saveWord = "";
    let splitSentence = sentence.split(" ");

    for (let word of splitSentence) {
        if (word.length > saveWord.length) {
            saveWord = word;
        };
    }
    console.log("-----> " + saveWord);
}


longestWord("this is a web development course"); // ➞ "development"

///////////////////////////////////////////////////

// 3. Reverse

console.log("3. Reverse:");

const reverse = num => parseInt(num.toString().split("").reverse().join(""));

console.log("----->", reverse(34532)); // ➞ 23543

//////////////////////////////////////////////////

// 4. AEIOU: Vowels.

console.log("4. AEIOU: Vowels:");

/* method 1 */

/* const findVowels = (string) => {
    //const vowels = ["a", "e", "i", "o", "u"]; 
    let count = 0;
    let myString = string.split("");
    for (let char of myString) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);

} */

/*  method 2 with RegEx */

const findVowels = (string) => {

    const vowels = /[aeiouAEIOU]/;
    let count = 0;

    for (let char of string) {
        let vowelTest = vowels.test(char);
        if (vowelTest) {
            count++;
        }
    }
    console.log("-----> ", count);
}

findVowels("this is a string"); // ➞ 4

////////////////////////////////////////////////////

// 5. Missing Number

console.log("5. Missing Number:");

const missingNums = arrayOfNumbers => {

    let number = [];
    let sortArray = arrayOfNumbers.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i <= 10; i++) {
        if (sortArray.indexOf(i) === -1) {
            if (i !== 0) {
                number.push(i);
            }
        }
    }
    console.log("-----> ", number);
}

missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]); // ➞ 5
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]); // ➞ 10 
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]); // ➞ 7

//////////////////////////////////////////////////////

// 6. Cubed


// challenge myself with closures


console.log("6. Cubed:");

const copyArrayAndDoPow = (pow) => {

    const doPow = (array) => {
        let result = 0;
        for (let num of array) {
            let cubedOfnum = Math.pow(num, pow);
            result += cubedOfnum;
        }
        console.log("-----> ", result);
    }
    return doPow;
}

const sumOfCubes = copyArrayAndDoPow(3);


sumOfCubes([1, 5, 9]); // ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([2]); // ➞ 8
sumOfCubes([]); // ➞ 0

//////////////////////////////////////////

// 7. Dictionary

console.log("7. Dictionary:");

const dictionary = (string, array) => {

    let match = [];
    for (let word of array) {
        if (word.startsWith(string)) {
            match.push(word);
        }
    }
    console.log("-----> ", match);
}


dictionary("bu", ["button", "breakfast", "border"]); // ➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]); // ➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"]); // ➞ []

/////////////////////////////////////////////////////////////

// 8. Even Number Generator

console.log("8. Even Number Generator:");

const evenNums = (num) => {

    let evenCollection = [];

    for (let i = 0; i <= num; i++) {
        if (i > 1) {
            if (i % 2 === 0) {
                evenCollection.push(i);
            }
        }
    }
    console.log("-----> ", evenCollection);
}


evenNums(8); // ➞ [2, 4, 6, 8]
evenNums(4); // ➞ [2, 4]
evenNums(2); // ➞ [2]

///////////////////////////////////////////////////

// Bonus: Alphabetical Order.

console.log("Bonus: Alphabetical Order:");


const alphaOrder = (string) => {

    /* console.log(string);
    const splitString = string.split("");
    console.log(splitString);
    const sortString = splitString.sort();
    console.log(sortString);
    const joinString = sortString.join("");
    console.log("-----> ", joinString); */

    return string.split("").sort().join("");

}
console.log(alphaOrder("webdev"));
alphaOrder("webdev"); // ➞ "bdeevw"