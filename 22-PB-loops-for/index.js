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
        console.log(`There are ${bottle} bottles of beer on the wall`)
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
    if (mult3 === 0 && mult5 === 0) {
        sum2 = sum2 + i;
        /* console.log(`${i} multiple of 3 and 5`); */
    }

    /* console.log(i); */ // the other numbers
}
console.log(`\x1b[35m${sum2}`); // (magenta colored output) sum of multiples of 3 and 5;

// task 7

console.log("Task 7:");