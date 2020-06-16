// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...numbers) => {
    let result = 0;
    for (number of numbers) {
        result += number;

    }
    return result;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70