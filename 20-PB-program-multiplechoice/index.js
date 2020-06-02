"use strict";

// task 1

let color = "red";

switch (color) {
    case "red":
        console.log("The color is Red!");
        break;
    case "blue":
        console.log("The color is Blue!");
        break;
    case "green":
        console.log("The color is Green!");
        break;
    case "yellow":
        console.log("The color is Yellow!");
        break;
    default:
        console.log("Insert red, blue yellow or green colors!");
}

// task 2

let grade = "e";

switch (grade) {
    case "a":
        console.log("Great Job!");
        break;
    case "b":
        console.log("That's good!!");
        break;
    case "c":
        console.log("Mmmh it's fine!");
        break;
    case "d":
        console.log("Ok, maybe you can learn better!");
        break;
    default:
        console.log("That's bad!");
}

// task 3

let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("Sweet Banana!");
        break;
    case "orange":
        console.log("Sunny Orange!");
        break;
    case "strawberry":
        console.log("Red Strawberry!");
        break;
    case "apple":
        console.log("Delicious Apple!");
        break;
    default:
        console.log("Write banana, orange, apple or strawberry!");
}

// task 4

let percentageComplete = 101;

// CHECK FOR ERRORS FIRST

// check if the value is a number value
if (typeof percentageComplete === "string") {
    console.log("Insert a percentage by typing a number! (Can't be a string!)");
} else {
    // check if the value is above zero
    if (percentageComplete < 0) {
        console.log("The percentage can't be below 0")
    } else {

        switch (true) {

            case (percentageComplete > 0) && (percentageComplete < 30):
                console.log("Still a long way to go!");
                break;
            case (percentageComplete >= 30) && (percentageComplete <= 50):
                console.log("Slowly getting there!");
                break;
            case (percentageComplete > 50) && (percentageComplete <= 80):
                console.log("You can do it!");
                break;
            case (percentageComplete > 80) && (percentageComplete <= 99):
                console.log("This is the last push!");
                break;
            case percentageComplete === 100:
                console.log("You're there. Well done!");
                break;
            case percentageComplete > 100:
                console.log("The percentage can't be above 100!");
                break;
            default:
                // if the percentage is 0
                console.log("You have no percentage!")


        }


    }
}