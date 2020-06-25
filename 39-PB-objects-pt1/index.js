"use strict";

// 1. Object Person
console.log("1. Object Person:");

const person = {
    name: "Vincenzo",
    age: 34,
    location: "Berlin"
}

const printObject = obj => {
    let row = "";
    for (let key in obj) {
        row += `\n${key}: ${obj[key]}`;
    }
    return row;
}

console.log(printObject(person));

///////////////////////////////////////

// 2. Get Values.
console.log("\n2. Get Values:");

const grocery = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}

const getObjectValues = obj => {
    return Object.values(obj);
}
console.log(getObjectValues(grocery));

///////////////////////////////////////////////

// 3. Add A Method
console.log("\n3. Add A Method:");

const personTwo = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    getInfos: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old driver in ${this.city}`
    }
}

console.log(personTwo.getInfos());

/////////////////////////////////////////////

// Bonus Questions
// 1. Convert keys and values into an array. 
console.log(`
Bonus Questions
1. Convert keys and values into an array:
`);

let object = {
    A: 1,
    B: 2,
    C: 3
}

const objectToArray = (obj) => {
    console.log(Object.entries(obj));
}


objectToArray(object);

//////////////////////////////////////////////////

// 2. List Properties
console.log("\n2. List Properties:");

let student = {
    name: "Mike",
    class: "4A",
    course: "English"
}

const getObjKeys = obj => {
    return Object.keys(obj);
}
console.log(getObjKeys(student));
//////////////////////////////////////////////////

// 3. Merge.
console.log("\n3. Merge:");


let first = {
    firstName: "John"
}
let last = {
    lastName: "Smith"
}

/* const newObject = {
    ...first,
    ...last
};

console.log(newObject); */

/* const mergeObjects = (obj) => {
    let newObject = Object.assign({}, obj);
    return newObject;
}

console.log(mergeObjects(first, last)); */

let newObject = Object.assign({}, first, last);
console.log(newObject);