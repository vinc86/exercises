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
    for (let first of obj) {
        for (let elements in first) {
            if (elements === "score") {
                let point = first[elements];
                totalScore += point;
            };
        }
    }
    return `Total score: ${totalScore} points`;
}

console.log(scrabbleScore(playerSet));

//////////////////////////////////////////////////