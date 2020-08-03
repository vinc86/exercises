// Your code goes here!
import * as calc from './percentage.js';
import {
    calculateAspectRatio
} from './aspect-ratio.js';

// modulo calculations
const moduloForm = document.querySelector('#modulo-form');

moduloForm.addEventListener('change', (e) => {
    e.preventDefault();
    const moduloFirst = document.querySelector('#modulo_1');
    const moduloSecond = document.querySelector('#modulo_2');
    const moduloResult = document.querySelector('#modulo_result');

    moduloResult.value = calc.modulo(moduloFirst.value, moduloSecond.value);



})


// percentage calculations

// percent
const percentForm = document.querySelector('#percentage-form');

percentForm.addEventListener('change', (e) => {
    e.preventDefault();

    const percFirst = document.querySelector('#percentage_1');
    const percSecond = document.querySelector('#percentage_2');
    const percResult = document.querySelector('#percentage_result');

    percResult.value = calc.percentage(percFirst.value, percSecond.value);



})

//percent of

const percentOfForm = document.querySelector('#percentageOf-form');

percentOfForm.addEventListener('change', (e) => {
    e.preventDefault();

    const percOfFirst = document.querySelector('#percentageOf_1');
    const percOfSecond = document.querySelector('#percentageOf_2');
    const percOfResult = document.querySelector('#percentageOf_result');

    percOfResult.value = calc.percentage(percOfFirst.value, percOfSecond.value);



})

// difference

const differenceForm = document.querySelector('#difference-form');

differenceForm.addEventListener('change', (e) => {
    e.preventDefault();

    const differenceFirst = document.querySelector('#difference_1');
    const differenceSecond = document.querySelector('#difference_2');
    const differenceResult = document.querySelector('#difference_result');

    differenceResult.value = calc.difference(differenceFirst.value, differenceSecond.value);



})

// aspect ratio

const aspectForm = document.querySelector('#aspect-form');

aspectForm.addEventListener('change', (e) => {
    e.preventDefault();

    const first = document.querySelector('#ratio_1');
    const second = document.querySelector('#ratio_2');

    const newHeight = document.querySelector('#ratio_result-height');
    const newWidth = document.querySelector('#ratio_result-width');

    /*  newHeight.value = calculateAspectRatio(first.value, second.value, newHeight.value, newWidth.value); */




})