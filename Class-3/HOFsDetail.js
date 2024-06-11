// map -> It doesn't modifies original array, it returns new array

// const arr = [1, 2, 3, 4];

// function double(x) {
//   return 2 * x;
// }

// function triple(x) {
//   return 3 * x;
// }

// console.log(arr.map(double));
// console.log(arr.map(triple));

// const output = arr.map(function (x) {
//   return 2 * x;
// });

// const output = arr.map((x, index) => {
//   console.log(x, index);
//   return 2 * x;
// });

// // const output = arr.map((x) => 2 * x);

// console.log("output -- ", output);

// Filter ()

// const arr = [5, 1, 3, 4];

// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

// function isEven(x) {
//   return !(x % 2);
// }

// const output = arr.filter(isEven);
// console.log(output);

// const output = arr.map(isOdd);
// console.log(output);

// reduce

// arr.reduce(function (accumulator/prevValue, currentValue, index) {}, initialValue(optional));

// const arr = [1, 2, 3, 4];
// const output = arr.reduce(function (acc, curr) {
//   console.log("acc--", acc); // 0 // 1 // 3 // 6 // 10
//   acc += curr; // 1 // 3 // 6 // 10
//   return acc; // 1 // 3 // 6 // 10
// }, 0);

// console.log(output);

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) max = arr[i];
//   }
//   return max;
// }

// const output = arr.reduce((acc, curr) => {
//   if (acc < curr) acc = curr;
//   return acc;
// }, arr[0]);

// console.log(output);

// Interview Question -> Write the polyfills for map, filter and reduce
// polyfills -> Polyfills are code that provides backcompatability to older browser
// abc method in 2024 -> user -> 2020 browser
// babel(transpiler)

// chain multiple functions

// const arr = [1, 2, 3, 4];

// function double(x) {
//   return 2 * x;
// }

// function triple(x) {
//   return 3 * x;
// }
// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.map(double).map(triple).map(double).filter(isOdd);
// [2, 3, 6, 8].map(triple).map(double).filter(isOdd);
// [6, 8, 18, 24]..map(double).filter(isOdd);

const users = [
  {
    firstName: "Neeraj",
    lastName: "Chaudhary",
    age: 22,
  },
  {
    firstName: "Yash",
    lastName: "Ram",
    age: 22,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    age: 29,
  },
  {
    firstName: "Ankit",
    lastName: "Chaudhary",
    age: 99,
  },
];

// list of full names
// const output = users.map((user) => user.firstName + " " + user.lastName);
// console.log(output);

// // different age and their count

// const ageOutput = users.reduce((acc, curr) => {
//   if (!acc[curr.age]) acc[curr.age] = 1;
//   else acc[curr.age]++;
//   return acc;
// }, {});

// console.log(ageOutput);

// // need to filter people greater than 30

// const filterOutput = users.filter((x) => x.age > 25);
// console.log(filterOutput);

// ForEach -> executes a provided Fn once for each array element
// array.forEach(function(curr, index) => {
//
// })

// forEach fn returns undefined -> it's not chainable

// let arr = [1, 2, 3];

// arr.forEach((curr, index) => {
//   console.log(curr, index);
// });

// find()

// const nums = [1, 2, 3, 4, 5];
// const foundNumber = nums.find((num) => num > 3);
// const foundNumberIndex = nums.findIndex((num) => num > 3);
// console.log(foundNumber);
// console.log(foundNumberIndex);
