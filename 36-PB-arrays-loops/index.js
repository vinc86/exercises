"use strict";

// 1.sumOfNumbers
console.log("1.sumOfNumbers:");

const arrayMath = (operation) => {
    let result = 0;

    // trough closures i can split the logic inside the main function depending of
    // the operation that i want to achieve.

    if (operation === "sum") { // first logic

        const sumNumbers = (array) => {

            array.forEach(num => {
                result += num;
            });
            return result;
        }
        return sumNumbers;

    } else if (operation === "multiply") { // second logic

        const multiplyNumbers = (array) => {

            array.forEach(num => {
                if (result === 0) {
                    // if result equals to 0 assign the first number of the array
                    result = num;
                } else {
                    // then multiply the other numbers consequently
                    result *= num;
                }
            });
            return result;
        }
        return multiplyNumbers;
    }

}

const myArray = [2, 4, 2];

// sum of numbers
const sumOfNumbers = arrayMath("sum");
console.log(sumOfNumbers(myArray));

// multiply numbers
const multiplyNumbers = arrayMath("multiply");
console.log(multiplyNumbers(myArray));

////////////////////////////////////////////////////////////

// 2.Hello Friends
console.log("2.Hello Friends:");

const people = ["marco", "claudia", "vincenzo", "laura", "maria", "valerio"];
const helloPeople = [];
const sayHello = array => {
    for (let friend of people) {
        helloPeople.push(`Hello ${friend}! Index: ${people.indexOf(friend)}`);
    }
    return helloPeople;
}
console.log(sayHello(people));

///////////////////////////////////////////////////////////////

// 3.City Names
console.log("3.City Names");

const cities = ["rome", "berlin", "budapest", "venice", "barcelona"];
let stringOfCities = [];

const showString = arrayOfCities => {
    arrayOfCities.forEach(city => {
        stringOfCities.push(`${city}`);
    })
    return stringOfCities.join(", ");

}

console.log(showString(cities));

///////////////////////////////////////////////

// 4. Odds and Evens
console.log("4.Odds and Evens:");

const oddAndEven = array => {
    let numbers = [];
    array.forEach(num => {
        if (num % 2 === 0) {
            num = num - 1;
            numbers.push(num);

        } else {
            num = num + 1;
            numbers.push(num);
        }

    })
    return numbers;
}

console.log(oddAndEven([3, 5, 2, 4]));
console.log(oddAndEven([6, 9, 10, 20]));

//////////////////////////////////////////////////

// 5.Capitalize
console.log("5.Capitalize:");

const names = ["samuel", "MARIA", "luke", "mary"];
const newArray = [];
const capitalizeNames = array => {
    let newName = "";
    for (let name of array) {
        newName = name.toString();
        let lower = newName.substr(1, newName.length);
        let firstLetter = newName[0].toUpperCase();
        let capitalName = firstLetter + lower.toLowerCase();
        newArray.push(capitalName);
    }
    return newArray;
}
console.log(capitalizeNames(names));

//////////////////////////////////////////////

// 6.No Duplicates! 
console.log("6.No Duplicates!");

/////////////////////////////////////////////

// 7. Repeat it
console.log("7. Repeat it:");

const repeatIt = (item, times) => {
    let result = [];

    for (let i = 0; i < times; i++) {
        result.push(item);
    }
    return result;

}
console.log(repeatIt("juice", 3));
console.log(repeatIt("apple", 5));

//////////////////////////////////////////////////