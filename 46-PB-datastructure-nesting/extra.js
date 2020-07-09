"use strict";

const person = {
    first: "Marco",
    last: "Enea",
    age: 26,
    yearsOfResidence: 7,
    nationality: "italian",
    profession: "self employed",
    salary: "2200",
    changeNationality: function () {
        if (this.yearsOfResidence >= 7) {
            return this.nationality = "Australian";
        } else {
            return;
        }
    }
}

console.log(person);
console.log(person.changeNationality());
console.log(person);


const personOne = {
    firstName: 'Kostas',
    countryOfResidence: 'Greece',
    bankAccount: 2560, // us-dollars
    oneDollarInLocalCurrency: 0.89, // euro
    changeInLocalCurrency: function () {
        this.bankAccountInLocalCurrency = parseFloat((this.bankAccount * this.oneDollarInLocalCurrency).toFixed(2));
    }
};

console.log(personOne);
personThree.changeInLocalCurrency();
console.log(personOne);

const personTwo = {
    firstName: 'Michel',
    countryOfResidence: 'Australia',
    bankAccount: 2560, // us-dollars
    oneDollarInLocalCurrency: 1.44, // Australian dollar
    changeInLocalCurrency: function () {
        this.bankAccountInLocalCurrency = parseFloat((this.bankAccount * this.oneDollarInLocalCurrency).toFixed(2));
    }
};

console.log(personTwo);
personThree.changeInLocalCurrency();
console.log(personTwo);

const personThree = {
    firstName: 'Aldo',
    lastName: 'Switzerland',
    bankAccount: 2560, // us-dollars
    oneDollarInLocalCurrency: 0.94, // swiss franc
    changeInLocalCurrency: function () {
        this.bankAccountInLocalCurrency = parseFloat((this.bankAccount * this.oneDollarInLocalCurrency).toFixed(2));
    }
};

console.log(personThree);
personThree.changeInLocalCurrency();
console.log(personThree);