// 1. Check if a number is within a given range.
console.log("1. Check if a number is within a given range:");



const range = {
    min: 6,
    max: 10
}

const checkRange = (num, obj) => {

    if (num >= Object.values(obj)[0] && num <= Object.values(obj)[1]) {
        console.log(true);
    } else {
        console.log(false);
    }


}

checkRange(4, {
    min: 0,
    max: 5
});
checkRange(4, {
    min: 4,
    max: 5
});
checkRange(4, {
    min: 6,
    max: 10
});
checkRange(5, {
    min: 5,
    max: 5
});

//////////////////////////////////////////////////////////////

// 2. Scrabble
console.log("\n2. Scrabble:");