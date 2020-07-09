"use strict";

// 1. Fido says
console.log("1. Fido says:");
class Dog {
    constructor(name) {
        this.name = name;
    }
}

Dog.bark = function () {
    console.log(`${this.name} says woof`);
};

let fido = new Dog("fido");


try {
    fido.bark();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

// we get an error because the function fido.bark() is not defined inside the class Dog

// this will work
class NewDog {
    constructor(name) {
        this.name = name;
    }
    bark = function () {
        console.log(`\n${this.name} says woof`);
    };
}

let bubu = new NewDog("bubu");

try {
    bubu.bark();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}


////////////////////////////////////////////////////////

// 2. Month Name
console.log("\n2. Month Name:");



const getMonthName = monthNum => {

    try {

        if (typeof monthNum !== "number") {
          throw new Error("Error: Should be a valid number!");
        } else {
            let message = "";
            switch (monthNum) {
                case 1:
                    message = "January";
                    break;
                case 2:
                    message = "February";
                    break;
                case 3:
                    message = "March";
                    break;
                case 4:
                    message = "April";
                    break;
                case 5:
                    message = "May";
                    break;
                case 6:
                    message = "June";
                    break;
                case 7:
                    message = "July";
                    break;
                case 8:
                    message = "August";
                    break;
                case 9:
                    message = "September";
                    break;
                case 10:
                    message = "October";
                    break;
                case 11:
                    message = "November";
                    break;
                case 12:
                    message = "December";
                    break;
                default:
                    throw new Error("Error: It's not a valid month number!");
            }
            return message;
        }

    } catch (e) {
        return e.name, "=> ", e.message;
    }

}

try {
    console.log(getMonthName(15));
} catch (err) {
    console.log(err.name, "=> ", err.message)
}

////////////////////////////////////////////////

//3. Reverse
console.log("\n3. Reverse:");

const reverseString = string => {

    try {
        if (typeof string !== "string") {
            throw new Error("This is not a string!");
        } else {
            console.log(string.split("").reverse().join(""));
        }
    } catch (e) {
        console.log(e.name, "=>", e.message);
    }

}

reverseString(2019);