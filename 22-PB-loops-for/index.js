"use strict";
// task 1

console.log("Task 1:");
let sum = 0;
for (let i = 1; i <= 20; i++) {

    sum = sum + i;
}

console.log(sum);

// task 2

console.log("Task 2:");

let bottles = ["one", "two", "three", "four", "five"];

for (let bottle of bottles) {

    if (bottle === "one") {
        console.log(`There is ${bottle} bottle of beer on the wall.`);
    } else {
        console.log(`There are ${bottle} bottles of beer on the wall.`);
    }

}


// task 3
console.log("Task 3:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is odd!`);
    } else {
        console.log(`${i} is even!`);
    }
}

// task 4 + Bonus

console.log("Task 4:");
let result = 0;
for (let i = 0; i <= 10; i++) {
    /* result = i * 9;
    console.log(`9 x ${i} = ${result}`); */
    console.log();
    console.log(`Table ${i}:`)
    console.log();
    for (let n = 0; n <= 10; n++) {
        result = n * i;
        console.log(`${i} x ${n} = ${result}`);
    }

}

// task 5

console.log("Task 5:");

for (let i = 1; i <= 100; i++) {
    let multiple3 = i % 3 === 0;
    let multiple5 = i % 5 === 0;
    let both = multiple3 && multiple5;
    switch (true) {
        case both:
            console.log("\"FizzBuzz\"");
            break;
        case multiple3:
            console.log("\"Fizz\"");
            break;
        case multiple5:
            console.log("\"Buzz\"");
            break;
        default:
            console.log(i);
    }
}

// task 6

console.log("Task 6:");


let sum2 = 0;
for (let i = 0; i <= 1000; i++) {
    let mult3 = i % 3;
    let mult5 = i % 5;
    if (mult3 === 0 || mult5 === 0) {
        sum2 = sum2 + i;
        /* console.log(`${i} multiple of 3 and 5`); */
    }

    /* console.log(i); */ // the other numbers
}
console.log(sum2); // (magenta colored output) sum of multiples of 3 and 5;

// task 7

console.log("Task 7:");

console.log("Bonus 1:")
let str1 = " ";
for (let i = 100; i <= 1000; i += 100) {
    str1 += i + " ";
}
console.log(str1);

console.log("Bonus 2:");

let str2 = " ";
for (let i = 1; i <= 128; i *= 2) {
    str2 += i + " ";
}
console.log(str2);
console.log("Bonus 3:");

let str3 = " ";
for (let i = 0; i <= 5; i++) {
    str3 += (i * 2) + " ";

}
console.log(str3);
console.log("Bonus 4:");
let str4 = " ";
for (let i = 0; i <= 5; i++) {
    if (i > 0) {
        str4 += (i * 3) + " ";
    }
}
console.log(str4);

console.log("Bonus 5:");
let str5 = " ";
for (let i = 9; i >= 0; i--) {
    str5 += i + " ";
}
console.log(str5);

console.log("Bonus 6:");
let result2 = "";
for (let i = 1; i <= 4; i++) {
    for (let x = 1; x <= 3; x++) {
        result2 = result2 + i + " ";

    }

}
console.log(result2);


console.log("Bonus 7:");

let result3 = " ";
for (let i = 0; i <= 4; i++) {
    for (let x = 0; x <= 4; x++) {
        result3 += x + " ";

    }
}
console.log(result3);