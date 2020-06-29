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

const playerSet = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
];

const scrabbleScore = (obj) => {
    let totalScore = 0;
    for (let firstArray of obj) {
        for (let key in firstArray) {
            if (key === "score") {
                let point = firstArray[key];
                totalScore += point;
            };
        }
    }
    return `Total score: ${totalScore} points`;

}

console.log(scrabbleScore(playerSet));

//////////////////////////////////////////////////

// 3. Is it an empty object?
console.log("\n3. Is it an empty object?");

const isEmpty = (obj) => {

    if (!obj) {
        return "Insert an object!";
    } else {
        let keysLength = Object.keys(obj).length;
        if (keysLength === 0) {
            return "Empty object";
        } else {
            return `The object has ${keysLength} properties!`;
        }
    }

}
console.log("-", isEmpty());
console.log("--", isEmpty({}));
console.log("---", isEmpty({
    a: 1
}));

///////////////////////////////////////////////////

// 4. Counting Letters
console.log("\n4. Counting Letters:");


/* const countLetters = string => {


        let stringCount = {};
        let count = 0;

        for (let i = 0; i < string.length; i++) {}
        countLetters("tree"); */