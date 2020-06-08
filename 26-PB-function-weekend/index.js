"use strict";

const date = new Date("2020-06-07");

const checkWeekend = (date) => {


    if (date.getDay() === 6 || date.getDay() === 0) {
        if (date.getDay() === 6) {
            console.log(`The ${date.getDate()}th of ${date.getMonth()+1} is a Saturday! Enjoy the Weekend!`);
        } else {
            console.log(`The ${date.getDate()}th of ${date.getMonth()+1} is a Sunday! The Weekend comes slowly to end D:`);
        }
    } else {
        console.log("It's not a weekend day! :(");
    };
}

checkWeekend(date);