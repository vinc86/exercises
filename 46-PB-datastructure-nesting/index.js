"use strict";

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

class PrintArray {
    constructor(array) {
        this.array = array;
    }
    getFirstNest = () => {
        for (let key of this.array) {
            return Object.values(this.array)[0];
        }
    }
    getSecondNest = () => {
        for (let key of this.array) {
            return Object.values(this.array)[1];
        }
    }
    getThirdNest = () => {
        for (let key of this.array) {
            return Object.values(this.array)[2];
        }
    }
    getAllNests = () => {

        for (let i = 0; i < this.array.length; i++) {

            console.log(`\nNest: ${i}\n`);
            for (let j = 0; j < this.array[i].length; j++) {
                console.log(this.array[i][j]);
            }
        }
    }
}

const arrayOfValues = new PrintArray(board);
console.log(arrayOfValues.getAllNests());