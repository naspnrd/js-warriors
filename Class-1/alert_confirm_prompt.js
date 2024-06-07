// Alert
// The alert function display a simple message dialog box with an OK button
// used to show important info or notifications to users

// alert("Your message goes here");

// Confirm
// confirm function displays a confirmation dialog box with Ok and Cancel Buttons
// return a boolean value(true or false)

// var res = confirm("Are you a male?");

// if (res) {
//   // perform some actions
//   console.log("Person is a male");
// } else {
//   console.log("Person is a female");
// }

// Prompt
// Prompt func displays a dialog box with a message, an input
// field for the user to enter text and OK and Cancel button

var userInput = prompt("Please enter your name");
if (userInput) {
  console.log(userInput);
} else {
  console.log("No user input");
}

// Ask the user to input for two numbers and add them and show the result as alert

let firstNumber = parseInt(prompt("Enter the first Number:"));
let secondNumber = parseInt(prompt("Enter the second number:"));

let sum = firstNumber + secondNumber;
alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
