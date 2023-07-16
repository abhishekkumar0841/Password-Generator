const passwordInput = document.querySelector('#password')
const generateBtn = document.querySelector('#btn')
const copyIcon = document.querySelector('#copy')
const passwordLength = 12;

const uppperCase = "ABCDEFGHIJKLMNOPQURSUVWXYZ"
const lowerCase = 'abcdefghijklmnopurstuvwxyz'
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_-+=\|,<.>/?';:'[{}]";

const allCharacters = uppperCase + lowerCase + numbers + symbols;
console.log(allCharacters)

function createPassword(){
    let password = "";
    password += uppperCase[Math.floor(Math.random() * uppperCase.length + 1)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length +1)];
    password += numbers[Math.floor(Math.random() * numbers.length + 1)];
    password += symbols[Math.floor(Math.random() * symbols.length + 1)];

    while(passwordLength > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length + 1)]
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