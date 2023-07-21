const passwordInput = document.querySelector("#password");
const generateBtn = document.querySelector("#btn");
const copyIcon = document.querySelector("#copy");
const message = document.querySelector(".message");

const passwordLength = 12;

const uppperCase = "ABCDEFGHIJKLMNOPQURSUVWXYZ";
const lowerCase = "abcdefghijklmnopurstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+=|,<.>/?';:'[{}]";

const allCharacters = uppperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += uppperCase[Math.floor(Math.random() * uppperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (passwordLength > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordInput.value = password;
}

generateBtn.addEventListener("click", createPassword);

copyIcon.addEventListener("click", passwordCopied);

function passwordCopied() {
  if (passwordInput.value != "") {
    passwordInput.select();
    // document.execCommand("copy")
    navigator.clipboard.writeText(passwordInput.value);

    message.textContent = "Password Copied!";
    message.style.opacity = "1";
  }
}

copyIcon.addEventListener("mouseover", showMessage);
copyIcon.addEventListener("mouseout", hideMessage);

function showMessage() {
  if (passwordInput.value != "") {
    message.textContent = "Copy ?";
    message.style.opacity = "1";
  } else if (passwordInput.value == "") {
    message.textContent = "No Password, Generate it first!";
    message.style.opacity = "1";
  }
}

function hideMessage() {
  message.style.opacity = "0";
}
