"use strict";

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let date_Today = new Date(year, month, day);

let futureDate = new Date("2021-06-20");


const myDate = (dateA, dateB) => {

    if (dateB > dateA) {
        console.log(`Your booking to the event for the ${dateB.getDate()}th ${dateB.getMonth()+1} ${dateB.getFullYear()} is already guaranteed!`)
    } else {
        console.log("Please select a future date!");
    }
}



myDate(date_Today, futureDate);