'use strict'

// HTML elements
const button = document.querySelector('.button');
const pwdContainer = document.querySelector('.password-container');
const charLength = document.querySelector('.select-length');
const msgBox = document.querySelector('.message-box');
const mixedCaseCheck = document.querySelector('.mixed-case-check');

// reusable
let message = '';
let customPassword = [];
const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
let upperCased = toUpperCase(charset.indexOf('a'), charset.indexOf('z'), charset);

//event listeners
button.addEventListener('click', generatePassword);