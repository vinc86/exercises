/* 

Aleeza's 89, 120 and 103 
Lis's team scored 116, 94 and 123 

*/

// task 1a

console.log("Task 1a:");

let aleezaTeamAverage = (89 + 120 + 103) / 3;
let lisTeamAverage = (116 + 94 + 123) / 3;
console.log(`----->Aleeza's team average: ${aleezaTeamAverage}`);
console.log(`----->Lis's team average: ${lisTeamAverage}`);

console.log();

// task 1b && 1c

console.log("Task 1b/1c:");

if (aleezaTeamAverage > lisTeamAverage) {
    console.log(`----->Aleeza's team wins with ${aleezaTeamAverage} points!`);
} else if (aleezaTeamAverage < lisTeamAverage) {
    console.log(`----->Lis's team wins with ${lisTeamAverage} points!`);
} else {
    console.log("----->The two teams have the same score!")
}

// task 1d && 1e
console.log();
console.log("Task 1d/1e:");

let maryTeamAverage = (97 + 134 + 105) / 3;


if ((aleezaTeamAverage > lisTeamAverage) && (aleezaTeamAverage > maryTeamAverage)) {
    console.log(`----->Aleeza's team wins with ${aleezaTeamAverage} points!`);
} else if ((lisTeamAverage > aleezaTeamAverage) && (lisTeamAverage > maryTeamAverage)) {
    console.log(`----->Lis's team wins with ${lisTeamAverage} points!`);
} else if ((maryTeamAverage > aleezaTeamAverage) && (maryTeamAverage > lisTeamAverage)) {
    console.log(`----->Mary's team wins with ${maryTeamAverage} points!`);
} else if ((aleezaTeamAverage === lisTeamAverage) && ((aleezaTeamAverage > maryTeamAverage) && (lisTeamAverage > maryTeamAverage))) {
    console.log("Aleeza's team and Lis's team have the same high score!");
} else if ((aleezaTeamAverage === maryTeamAverage) && ((aleezaTeamAverage > lisTeamAverage) && (maryTeamAverage > lisTeamAverage))) {
    console.log("Aleeza's team and Mary's team have the same high score!");
} else if ((lisTeamAverage === maryTeamAverage) && ((lisTeamAverage > aleezaTeamAverage) && (maryTeamAverage > aleezaTeamAverage))) {
    console.log("Lis's team and Mary's team have the same high score!");
} else {
    console.log("----->The three teams have the same score!")
}