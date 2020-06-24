// 1.
console.log("task 1:");

const printStars = () => {
    let myArray = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            myArray.push("*");
            console.log(myArray.join(" "));
        }

    }


}

console.log(printStars());


///////////////////////////////////////////


// 2. 
console.log("task 2:");
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

const printArray = array => {

    for (let i = 0; i < array.length; i++) {
        console.log(`row ${i}`);
        for (let j = 0; j < array[0].length; j++) {
            console.log(array[i][j]);
        }
    }
}

printArray(arr);

//////////////////////////////////////////////////

// 3.
console.log("task 3:");

const printNumbers = () => {
    let arrayOne = [];
    let arrayTwo = [];
    for (let i = 1; i <= 4; i++) {

        for (let j = 0; j <= 4; j++) {
            if (j !== 0 && j <= 3) {
                arrayOne.push(i);
            }
            arrayTwo.push(j);
        }

    }
    console.log(arrayOne.join(" "));
    console.log(arrayTwo.join(" "));
}

printNumbers();