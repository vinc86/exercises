"use strict";

// task 1
console.log("task 1:");

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    getInfos: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`
    }
};

console.log(student.getInfos());

////////////////////////////////////////

// task 2
console.log("task 2:");

const person = {
    first: "",
    last: "",
    age: "",
    city: "",
    getInfos: function () {
        if (this.first && this.last && this.age && this.city) {
            return `Name: ${this.first} ${this.last}, Age: ${this.age}, Born in: ${this.city}`;
        } else {
            return "Set First & Last Name, Age and City first!";
        }
    },
    getObjLength: function () {
        return Object.keys(person).length;
    }
}

console.log(person.getInfos()); // Doesn't return anything because it's empty;

person.first = "Vincenzo";
person.last = "Mancuso";
person.age = 34;
person.city = "Rome";

console.log(person.getInfos());

/////////////////////////////////////////////////////////////////

// task 3
console.log("task 3:");
console.log(person.getObjLength());