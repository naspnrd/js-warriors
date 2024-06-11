// ES6 -> it's very powerful tool to work with objects

// Array Destructuring
// allow us to extract values from arrays and assign them to variables in
// single expression

// const user = ["Neeraj", "Chaudhary"];

// // user[1]

// const [firstName, lastName] = user;

// Common UseCases

// let a = 5;
// let b = 6;

// console.log("before swap ---- ", a, b);
// [a, b] = [b, a]; // swapping
// console.log("after swap ---- ", a, b);

// a, b = b, a

// nested array

// const nestedArray = [1, 2, [3, 4], 5, 6];

// const [a, b, [c, d], e, f] = nestedArray;

// console.log(a, b, c, d, e, f);

// spread Operator(arrays, objects, string)
// it unpacks into individual values

// const arr = [1, 2, 3];

// console.log(arr);
// console.log(...arr);

// 1. Concatenate two arrays into single array

// const first = [1, 3];
// const second = [2, 4];

// const third = [...first, ...second];
// console.log(third);

// // 2. Concatenate two objects
// const obj1 = { name: "Neeraj" };
// const obj2 = { age: 22 };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Functions
// const arr = [1, 2, 3];
// function sum(a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// }

// console.log(sum(...arr));

// Rest Operator(pack Elements)
// It collects all the remaining elements into an array

const arr = [1, 2, 3, 4, 5];

const [a, b, ...rest] = arr;
console.log(a, b, rest);

// functions
function sum(a, b, ...rest) {
  console.log(arguments); // deprecated
  console.log(arguments[0]);
  console.log(Array.from(arguments));
  console.log(a, b, rest);
}

sum(...arr);
