"use strict";

//1. Combining Arrays
console.log("1. Combining Arrays:");

const euroCountries = ["italy", "spain", "france", "germany"];
const asianCountries = ["japan", "cina", "india", "singapore"];

for (let country of asianCountries) {
    euroCountries.push(country);
}

let arrayOne = ["car", "bike", "underground"];
let arrayTwo = ["banana", "peach", "strawberry"];
let arrayThree = [];

// method 1
for (let element of arrayOne) {
    arrayThree.push(element);
}
for (let element of arrayTwo) {
    arrayThree.push(element);
}

// method 2
let arrayFour = [...arrayOne, ...arrayTwo];

console.log("first result: ", euroCountries);
console.log("second result: ", arrayThree);
console.log("third result: ", arrayFour);
////////////////////////////////////////////

//2. Copying Arrays
console.log("\n2. Copying Arrays:")
let otherArray = ["coding", "is", "fun"];
let copiedArray = [...otherArray];

console.log(copiedArray);

///////////////////////////////////////////

// 3. Find the Largest && 4. Find the Smallest
console.log("\n3 and 4:");

let numbers = [3, 4, 7, 10];

const findLargest = (array) => {
    console.log("max: " + Math.max(...array));
}

const findSmallest = (array) => {
    console.log("min: " + Math.min(...array));
}
findSmallest(numbers);
findLargest(numbers);

///////////////////////////////////////////

// 5. Clone and Merge
console.log("5. Clone and Merge:");

const person = {
    name: "John"
}
const job = {
    role: "Teacher"
}

const personClone = {
    ...person
};

console.log(personClone);

const employee = {
    ...person,
    ...job
};

console.log(employee);

employee.name = "Tom";
employee.role = "Student";

console.log(employee);

////////////////////////////////////

// Bonus: 6.  Is the average a whole number?
console.log("Bonus: 6.  Is the average a whole number?")

const isWhole = (...numbers) => {
    let sum = 0;
    let average = 0;
    for (let num of numbers) {
        sum += num;
        average = sum / numbers.length;
    }

    if (Number.isInteger(average)) {
        return `${average}: Integer`;
    } else {
        return `${average}: Not integer`;
    }
}

console.log(isWhole(2, 3, 4, 5));
console.log(isWhole(...[2, 3, 4, 5]));