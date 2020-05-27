"use strict";
// task 1
let determiner = 4;
let x;

console.log("Task1:")
determiner >= 0 ? x = "Greater or equal to 0" : x = "Less than 0";
console.log(x);


// task 2

let updater;

console.log("Task 2:");
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
} else {
    updater = "Less than 0";
}

/* 
What would happen if we tried to print "message" outside of the if statement?

If i call the message outside of is scope it will result as undefined.
*/

// task 3

/* if i have to write multiple statement i can't do it inside ternary operator, and then i have to use an if/else.

// WRONG

num > 10 ? console.log("bigger"); console.log(num) : <other conditions> ;  


// RIGHT

if(num > 10){
    console.log("bigger");          
    console.log(num);
} else {
    .....
}


*/