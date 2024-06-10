// HOFs -> Higher Order Functions
// A function which takes another Function as an argument or return a function from it
// known as HOF.

// function x() {
//   console.log("x is called");
// }

// // now y became a HOF
// function y(x) {
//   x();
// }

// Example

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(Math.PI * radius[i] * radius[i]);
//   }
//   return out;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(2 * Math.PI * radius[i]);
//   }
//   return out;
// };

// console.log(calculateCircumference(radius));

// optimised

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
  const out = [];
  for (let i = 0; i < radius.length; i++) {
    out.push(logic(radius[i]));
  }
  return out;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
