// Assignment Code
//TODO import tag does not work with array? 

//Unable to clear "," from array random 

// import { userSpecialacters, userUpperdCharacters, lowerCasedCharacters, userNumericCharacters } from "./ArraysList.js"
var generateBtn = document.querySelector("#generate");
// Varables for arrays 
// Array of special characters
var userSpecialacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of userNumeric characters
var userNumericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of userUpper characters
var userUpperdCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var arrayLength = [];
//Set count to 0
var count = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {

  var userInput = prompt("How many characters for your password? Enter between (8-128)");
  var userUpper = confirm("Do you want upper case characters?");
  var userNumeric = confirm("Do you want numbers?");
  var userSpecial = confirm("Special Characters?");


  do {

    // random lower case
    var lowerRand = Math.floor(Math.random() * 25) + 0;
    arrayLength.push(lowerCasedCharacters[lowerRand]);

    if (userUpper == true) {
      //random upper case
      var upperRand = Math.floor(Math.random() * 25) + 0;
      arrayLength.push(userUpperdCharacters[upperRand]);
    }

    if (userNumeric == true) {
      //random number
      var numRand = Math.floor(Math.random() * 9) + 0;
      arrayLength.push(userNumericCharacters[numRand]);
    }

    if (userSpecial == true) {
      //random special character
      var specialRand = Math.floor(Math.random() * 25) + 0;
      arrayLength.push(userSpecialacters[specialRand]);
    }

    count++;
  } while (count <= userInput);

  var arrayToSring = arrayLength.toString();

  return arrayToSring;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);