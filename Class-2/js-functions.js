// -> Function Declarations/Function Expressions/ Anonymous Func, Diff between
// Parameters and Arguments, First Class Functions/Citizens, Arrow Functions, IIFE Functions

// Function Declarations / Function Statement
// these kind of functions get hoisted at the top
//
// foo();
// function foo() {
//   console.log("foo");
// }
// foo();

// Function Expressions

// b();
// var b = function () {
//   console.log("b is called");
// };

// // b();

// // post hoisting

// var b;
// b();
// b = function () {
//   console.log("b is called");
// };

// Anonymous Functions -> a function without a name is anonymous Func

// var b = function () {
//   console.log("b is called");
// };

// var b = function abc() {
//   console.log("b is called");
// };

// abc(); // reference Error

// Diff between arguments and Parameters

// Arrow Functions
// ES6
// they use => token(fat arrow)

// function sum(a, b) {
//   return a + b;
// }

// // arrow functions

// way -1 when you want to execute more than 1 statement
// () => {};
// var sum1 = (a, b) => {
//   console.log(a, b);
//   return a + b;
// };

// way -2 only one Expression/statemnt to execute
// var sum2 = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum1(1, 2));
// const result = sum2(1, 2);
// console.log(result);
// console.log(sum2(1, 2));

// IIFE -> Immediately Invoked Function Expressions
// IIFE is a way to execute funcs immediately as soon as
// they are created

// (function () {
//   console.log("IIFE");
// })();

// (function () {
//   console.log("IIFE");
// })();

// (() => {
//   // var, let, const
//   console.log("IIFE arrow");
// })();

// can't access them here
