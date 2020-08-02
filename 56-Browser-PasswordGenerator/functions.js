function toUpperCase(startIndex, endIndex, charString) {
    const UPPERCASE_ARRAY = [];
    for (let i = startIndex; i <= endIndex; i++) {
        UPPERCASE_ARRAY.push(charString[i].toUpperCase())
    }
    return UPPERCASE_ARRAY
}


function generatePassword(e) {
    e.preventDefault();

    /* const charArray = charset.split(''); */
    const withMixedCase = mixedCaseCheck.checked;
    const passwordLength = charLength.value;

    if (passwordLength < 5) {
        message = 'The password should have at least a length of 5 chars!';
        msgBox.innerText = message;
        msgBox.classList.add('error');
    } else if (passwordLength > 20) {
        message = 'Max password length is of 20 chars!';
        msgBox.innerText = message;
        msgBox.classList.add('error');
    } else {
        msgBox.innerText = '';
        msgBox.classList.remove('error');
        let charCodes = charset;

        // if mixed case is checked, concatenate the UPPERCASE_ARRAY
        if (withMixedCase) {
            charCodes = [...charCodes, ...upperCased];
        }

        for (let i = 0; i < passwordLength; i++) {
            let randomChar = Math.floor(Math.random() * charCodes.length);
            customPassword.push(charCodes[randomChar]);
        }
        let userPwd = customPassword.join('');

        // after the password is created, the customPassword array should be emptied
        customPassword = [];

        // show password
        pwdContainer.innerText = userPwd;

    }
}