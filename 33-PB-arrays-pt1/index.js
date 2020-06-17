"use strict";

// 1

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);

let city = euroCities[1];
console.log(city);

// 2.

euroCities[0] = "Berlin";
console.log(euroCities);

// 3.

console.log(euroCities.length);

// 4.

euroCities.pop();
console.log(euroCities);

// 5.

euroCities.push("Budapest");
console.log(euroCities);

// 6.

euroCities.splice(1, 2);
console.log(euroCities);

// 7.

const asianCities = ["Hong Kong", "Beijing", "Shanghai", "Delhi", "Tokyo"];

// 8.

const anotherArray = [];

anotherArray.push(asianCities[1]);
anotherArray.push(asianCities[3]);

console.log(asianCities);
console.log(anotherArray);

// 9.

const worldCities = euroCities.concat(asianCities);

console.log(worldCities);

// 10.

const reverseWorld = worldCities.reverse();
console.log(reverseWorld);

// 11.

worldCities[2] = "Toronto";
console.log(worldCities);

// 12.

worldCities.splice(1, 0, "Washington");

console.log(worldCities);

// 13.

const joinWorld1 = worldCities.join(", ");
console.log(joinWorld1);

const joinWorld2 = worldCities.join(" + ");
console.log(joinWorld2);


console.log();

// Bonus 1.

let string = "Hello World!";

function reverseString(str) {
    // using split to create an array an separate each letter;
    // reverse() the order;
    // join() to transform it to a string;
    return str.split("").reverse().join("");
}

console.log(reverseString(string));