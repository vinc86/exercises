"use strict";

//1,3,5,7,8,10,12 = 31;
// 2 = 28;
//4,6,9,11 = 30;    

const date = new Date();
date.setFullYear(2020, 6, 27);

const checkDays = (value) => {
    const month = value.getMonth();
    const day = value.getDate();
    let restDays;

    console.log(month);
    switch (month) {
        case 2:
            restDays = 28 - day;
            console.log(`${restDays} left till the end of the Month!`);
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            restDays = 30 - day;
            console.log(`${restDays} left till the end of the Month!`);
            break;
        default:
            restDays = 31 - day;
            console.log(`${restDays} left till the end of the Month!`);
            break;

    }

}



checkDays(date);


// i have to make it with setDate, i will try!