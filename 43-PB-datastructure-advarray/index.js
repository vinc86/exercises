"use strict";

// 1. Get total orders
console.log("1. Get total orders:");

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const totalAmount = array => {

    const newArray = [];
    array.map((array) => {
        for (let keys in array) {
            newArray.push(array[keys]);
        }

    })
    const totalSum = newArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;

    });

    console.log(totalSum);
}

totalAmount(orders);

//////////////////////////////////////////////////

// 2. Increment by 1
console.log("\n2. Increment by 1:");


const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const incrementByOne = array => {

    const newArray = array.map((value) => value + 1);
    console.log(newArray);
}

incrementByOne(arrayOfNumbers);

///////////////////////////////////////////////////

// 3. Filter Evens
console.log("\n3. Filter Evens:");

const filterEvens = (arr) => arr.filter((value) => value % 2 === 0);

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));


///////////////////////////////////////////////////////

// 4. Filter Friends
console.log("4. Filter Friends:");

const friendsArray = ["rika", "jenna", "bleda", "oliver", "itamar"];



const friendFilter = (query, array) => {
    const filteredArray = array.filter((value) => value.includes(query));
    console.log(filteredArray);
}


friendFilter("ka", friendsArray);
friendFilter("o", friendsArray);
friendFilter("e", friendsArray);

/////////////////////////////////////////////////////

// 5. Sum Up
console.log("5. Sum Up:");

const sum3 = arr => arr.reduce((previous, current) => previous + current);

console.log(sum3([1, 2, 3, 4, 5]));
console.log(sum3([6, 7, 7]));

////////////////////////////////////////////////////

// 6. Square Root
console.log("6. Square Root:");

const squareRoot = arr => arr.map((value) => Math.sqrt(value));

console.log(squareRoot([4, 9, 16, 25, 44]));