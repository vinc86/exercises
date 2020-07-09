'use strict';

const randomNumberGenerator = () => {
    let rand = 4 /* Math.floor(Math.random() * 10) + 1; */
    let guess;
    for (let i = 3; i >= 1; i--) {

        guess = +prompt(`Guess a Number! ${i} guesses left`); // + shorthand for parseInt()
        console.log(guess);
        if (guess === rand) {
            alert(`Well done! the number was ${rand}`);
            break;
        } else {
            alert(`FAILED! You Guessed ${guess}, the number was ${rand}`);
        }
        if (i === 1) {
            alert("Sorry!! You failed in three attempts!");
        }
    }
}


randomNumberGenerator();