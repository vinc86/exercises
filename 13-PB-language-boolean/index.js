"use strict";

// task 1
console.log("Task 1:");
console.log(
  `- 3="3" output: SyntaxError: Invalid left-hand side in assignment`
); // returns an error because a single = is used to assign values into declared variables/constants

console.log(`- 3 == "3" output: ${3 == "3"}`); // return true, it checks only the value
console.log(`- 3 === "3" output: ${3 === "3"}`); // return false, it checks value and type, and they are two different types (number and string)

// task 2

let exampleVar = true;

console.log(`Task 2: ${exampleVar === false ? true : false}`);
// or !exampleVar ? true : false

// task 3

/* 
    It will look inside the first variable "givenName", if it's empty than will look inside "firstName". In case this last variable is empty too, than will assign the value 'John';

    In this case is going to print "Stacey".
*/
