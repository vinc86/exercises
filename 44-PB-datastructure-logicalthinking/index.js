"use strict";
// 1. Lowest to Highest
console.log("1. Lowest to Highest:")
const arrayOfNumbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

const sortNumbers = array => {
    let sort = array.sort((a, b) => a - b);
    return sort;
}

console.log(sortNumbers(arrayOfNumbers));

// 2. Alphabetical Order

console.log("\n2. Alphabetical Order:");

const arrayOfNames = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

const sortNames = array => {
    let sort = array.sort();
    return sort;
}

console.log(sortNames(arrayOfNames));


/////////////////////////////////////

// bonus
console.log("Bonus task:");

const orderNamesForLength = array => {

    let order = array.sort((a, b) => a.length - b.length);
    return order;

}

console.log(orderNamesForLength(arrayOfNames));