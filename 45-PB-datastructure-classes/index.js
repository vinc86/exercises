"use strict";

// 1. Person Class
console.log("1. Person Class:");

class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;
        this.describe = function () {
            return `${this.name}, ${this.age} years old.`;
        }
    }

}

const newPerson = new Person("vincenzo", 34);

/* newPerson.name = "Vincenzo";
newPerson.age = 34; */

console.log(newPerson.describe());

/////////////////////////////////////////////////////

// 2. Volume
console.log("2. Volume:");

class DoMath {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
        this.calcVolume = () => {
            let circleArea = Math.PI * this.radius * this.radius;
            let result = circleArea * this.height;
            return `The volume is ${result.toFixed(2)}`;
        }
    }

}

const cylinder = new DoMath(8, 15);
console.log(cylinder.calcVolume());

//////////////////////////////////////////////

// 4. TV Class
console.log("\n4. TV Class:");

class Tv {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVolume = () => {
        if (this.volume === 100) {
            console.log("Max volume reached!");
            return;
        } else {
            this.volume += 10;
            console.log("Volume up!");
        }
    }

    decreaseVolume = () => {
        if (this.volume === 0) {
            console.log("Min volume reached!");
            return;
        } else {
            this.volume -= 10;
            console.log("Volume Down!");;
        }
    }

    randomZapping = () => this.channel = Math.floor(Math.random() * 50);

    resetTv = () => {
        this.volume = 50;
        this.channel = 1;
    }

    getTvStatus = () => `${this.brand} at channel ${this.channel}, volume ${this.volume}`;

}

const myTv = new Tv("Samsung");
console.log(myTv.volume);
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
console.log(myTv.volume);

myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.decreaseVolume();
console.log(myTv.volume);

myTv.randomZapping();
console.log(myTv.channel);
console.log(myTv.getTvStatus());
myTv.increaseVolume();
console.log(myTv.getTvStatus());
myTv.resetTv();
console.log(myTv.getTvStatus());