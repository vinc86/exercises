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

console.log("4. One is not like the others:");

const unique = (array) => {
    let newArray = [];
    for (let number of array) {
        console.log(array.indexOf(number));
    }


}


unique([3, 3, 3, 7, 3, 3]); // ➞ 7
unique([0, 0, 0.77, 0, 0]); // ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]); // ➞ 0