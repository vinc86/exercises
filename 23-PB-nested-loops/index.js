"use strict";

for (let i = 0; i <= 10; i++) {
    let star = "";
    for (let l = 10; l > i; l--) {
        star += " ";
    }
    for (let c = 0; c < i * 2 - 1; c++) {
        star += "*";

    }
    for (let r = 10; r > i; r--) {
        star += " ";

    }

    console.log(star);
}


//reverse tree

// i really have no idea how i get it right :D


console.log();

for (let i = 0; i <= 20; i++) {
    let star = "";

    for (let s = 0; s <= i; s++) {
        star += " ";

    }
    for (let s = 20; s >= i * 2; s--) {
        star += "*";

    }
    console.log(star);
}