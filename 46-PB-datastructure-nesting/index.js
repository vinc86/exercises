"use strict";
//1. 2D Array
console.log("\n1. 2D Array:");

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

//////////////////////////////////////////////////////

//2. Doggo
console.log("\n2. Doggo:");

class Doggo {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    favoriteFoods = ["kibble", "chicken", "canned goods"];
    printFavoriteFoods = () => {
        return Object.values(this.favoriteFoods).join(", ");
    }
}

const myDog = new Doggo;
console.log(myDog.favoriteFoods[1]);
console.log(myDog.printFavoriteFoods());

///////////////////////////////////////////////////////////

// 3.Recipes
console.log("\n3.Recipes:");

const recipes = {

    ingredients: [
        "butter",
        "sugar",
        "flour"
    ],

    printIngredients: function () {
        return Object.values(this.ingredients).join(", ");
    }
}
recipes.ingredients.push("ginger");

console.log(recipes.ingredients);

const changeIngredientName = (array, originalName, newName) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === originalName) {
            array[i] = newName;
        };
    }
}

changeIngredientName(recipes.ingredients, "sugar", "bla bla");

console.log(recipes.printIngredients());