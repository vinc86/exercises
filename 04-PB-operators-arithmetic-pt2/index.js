/* --------- BASIC ARITHMETIC PROBLEMS ---------- */

/* Q1 */
let totalEarned = 6450;
let singleTicket = 15;
let soldTickets = totalEarned / singleTicket;

console.log(soldTickets);

/* Q2 */

let silviaIncome = 500; // per week
const MONTHS_IN_YEAR = 12;
const WEEKS_IN_A_MONTH = 4;
const MONTH_INCOME = silviaIncome * WEEKS_IN_A_MONTH;
/* console.log("Monthly Income: ", MONTH_INCOME); */
const YEAR_INCOME = MONTH_INCOME * MONTHS_IN_YEAR;
console.log("Yearly Income: ", YEAR_INCOME);

/*  --------- PERCENTAGE ---------------- */

/* Q3 */

const PERCENTAGE = (17 / 30) * 100;
console.log(PERCENTAGE.toFixed(2), "%");

/*------------  GEOMETRY FORMULAS ----------- */

/* Q4 */

let squareSide = 4.75;
const SQUARE_PERIMETER = squareSide * 4;
console.log(`The Square perimeter measures ${SQUARE_PERIMETER} cm`);

/* Q5 */

let sideA = 5;
let sideB = 6;
let sideC = 7;

const TRIANGLE_PERIMETER = sideA + sideB + sideC;

console.log(`The Triangle perimeter measures ${TRIANGLE_PERIMETER} cm`);

/* Q6 */

let newSquareSide = 5;

const SQUARE_AREA = newSquareSide * newSquareSide;
console.log(`The Square area is ${SQUARE_AREA} cm2`);

/* Q7 */

/*  i'm using the Erone Formula  for this one, because is not a height value*/

let a = 5;
let b = 6;
let c = 7;

const SEMI_P = (a + b + c) / 2; // semi perimeter
const TRIANGLE_AREA = Math.sqrt(
  SEMI_P * (SEMI_P - a) * (SEMI_P - b) * (SEMI_P - c)
);

console.log("Triangle area is: ", TRIANGLE_AREA.toFixed(2), "cm2");

/* Q8 */

let cubeSide = 9;
const CUBE_VOLUME = cubeSide * cubeSide * cubeSide;

console.log(`The volume of the Cube is of ${CUBE_VOLUME} cm3`);

/* ------- CONSUMER FORMULA -------- */

/* Q9 */

let billOne = 22.35;
let billOneTip = (billOne * 10) / 100;

let billTwo = 26.67;
let billTwoTip = (billTwo * 15) / 100;

let billThree = 35.92;
let billThreeTip = (billThree * 20) / 100;

const TOTAL_AMOUNT =
  billOne + billOneTip + billTwo + billTwoTip + billThree + billThreeTip;
console.log("Total: ", TOTAL_AMOUNT, "€");

/* ---------------- AVERAGE ------------------ */

/* Q10 */

let workedHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let average = workedHours / 10;

console.log("Noemy's average hours worked per day: ", average);

/* Q11 */

let previousFiveTestSum = 75 + 70 + 85 + 90 + 100;
let totalAverage = 85;
let unknownScore = totalAverage * 6 - previousFiveTestSum;

console.log("Last test score: ", unknownScore);
