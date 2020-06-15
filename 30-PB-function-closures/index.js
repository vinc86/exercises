"use strict";

// 1. Addition

console.log("task 1:");

function add(num1) {
    function addNumber(num2) {
        return num1 + num2;
    }
    return addNumber;
}

console.log(add(3)(4));

/////////////////////////////////////

// 2. Multiply

console.log("task 2:");

function multiplier(num1) {


    function multiplyForNum(num2) {

        return num2 * num1;
    }

    return multiplyForNum;

}

const multiplyBy4 = multiplier(4); // assign the value to num1

console.log(multiplyBy4(8)); // assign the value to num2

//becomes 8 * 4;

///////////////////////////////////////////////

// 3. Calculate Money Saved till Pension Day!

console.log("task 3:");

(function (age, retirementAge, monthlyWage, monthlySavePerc) {

    let usrAge = age,
        usrRetAge = retirementAge,
        usrWage = monthlyWage,
        usrSave = monthlySavePerc;

    const isRetired = false;

    if (isRetired) {
        console.log("You're already retired!")
    } else {
        let calcTotalYears = usrRetAge - usrAge;
        let calcSaves = (usrWage * usrSave) / 100;
        let yearSaves = calcSaves * 12;
        let totalSavedAmount = yearSaves * calcTotalYears;

        console.log(`
    Age: ${usrAge}
    Retirement age: ${usrRetAge}
    Monthly earned: ${usrWage}
    Save per month: ${usrSave}%

    With a monthly fee of ${usrSave}% you'll save ${totalSavedAmount}€ until you retire.
    `)


    }

})(40, 65, 2000, 5);