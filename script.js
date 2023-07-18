const passwordInput = document.querySelector('#password')
const generateBtn = document.querySelector('#btn')
const copyIcon = document.querySelector('#copy')
const passwordLength = 12;

const uppperCase = "ABCDEFGHIJKLMNOPQURSUVWXYZ"
const lowerCase = 'abcdefghijklmnopurstuvwxyz'
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_-+=\|,<.>/?';:'[{}]";

const allCharacters = uppperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = "";
    password += uppperCase[Math.floor(Math.random() * uppperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(passwordLength > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    passwordInput.value = password;
}

generateBtn.addEventListener('click', createPassword)

copyIcon.addEventListener('click', passwordCopied);

function passwordCopied(){
    passwordInput.select();
    // document.execCommand("copy")
    navigator.clipboard.writeText(passwordInput.value);
}

