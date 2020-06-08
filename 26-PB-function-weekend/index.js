"use strict";

const date = new Date("2020-06-07");

const checkWeekend = (value) => {


    if (value.getDay() === 6 || value.getDay() === 0) {
        if (date.getDay() === 6) {
            console.log(`The ${value.getDate()}th of ${value.getMonth()+1} is a Saturday! Enjoy the Weekend!`);
        } else {
            console.log(`The ${value.getDate()}th of ${value.getMonth()+1} is a Sunday! The Weekend comes slowly to end D:`);
        }
    } else {
        console.log("It's not a weekend day! :(");
    };
}

checkWeekend(date);