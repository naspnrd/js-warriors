// arrays ->  A Data structure for storing a collection of
// multiple items under a single variable name

// Declaration
// let arr = new Array();
// let arr1 = []; // preferred one

// let fruitNames = ["apple", "mango", "lichi"];
// //                   0        1        2
// console.log(fruitNames[0]); // apple
// console.log(fruitNames[1]); // mango
// console.log(fruitNames[2]); // lichi
// console.log(fruitNames[3]); // undefined
// console.log(fruitNames[100]); // undefined
// console.log(fruitNames.length); // undefined

// An Array can store elements of any type

// const arr = [
//   "Neeraj", // 0 // -5
//   {
//     age: 25,
//     profession: "software engineer",
//   }, // 1 // -4
//   false, // 2 // -3
//   function () {
//     console.log("hello");
//   }, // 3 // -2
//   [1, 2, 3], // 4 // -1
// ];

// const obj = {};
// console.log(arr[3]());

// console.log(typeof arr);
// console.log(typeof obj);

// // Array.isArray()

// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray(obj)); // false
// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false

// console.log({ arr });

// Array methods

// 1. at() method
// arr[i] , if i >= 0
// console.log(arr.at(0));
// console.log(arr.at(-1));
// console.log(arr.at(-2));
// console.log(arr.at(-5));
// console.log(arr[-2]); // doesn't work for negative indices

// 2. Push () method

// arr.push("Chaudhary");
// console.log(arr);

// 3. Pop () method

// const poppedValue = arr.pop();
// console.log(poppedValue);
// console.log(arr);

// 4. Shift() method -> removes the first element from an array and return that element

// console.log("before shifting --- ", arr);
// const shiftedValue = arr.shift();
// console.log(shiftedValue);

// console.log(arr);

// Example

// var words = ["one", "two", "three", "four"];
// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
//   if (words[i] === "two") {
//     words.shift();
//   }
// }

// Output
// "one"
// "two"
// "four"

// unshift() method
// add one or more elements in the start

// arr.unshift(1, "2");

// console.log(arr);

// concat method -> don't modify the original array, returns new array
// is used to merge two or more arrays

// const arr1 = [1, 2];

// const mergedArr = arr1.concat(arr);
// console.log(mergedArr);

// splice and slice method
// splice method -> modifies the original array
// delete -> delete an object or it's properties

// delete arr[0];
// console.log(arr);

// syntax
// arr.splice(start[, deleteCount, elem1, elem2, ...., elemN])

// let arr = ["we", "are", "learning", "javaScript"];
// //          0      1         2           3
// arr.splice(1, 2, "will", "is", "are");

// console.log(arr);

// let arr = [1, 2, 5];
// //         0  1  2
// //        -3  -2 -1
// // arr.splice(-1, 0, 3, 4);
// // console.log(arr); // [1, 2, 3, 4, 5]

// arr.splice(-1, 1, 3, 4);
// console.log(arr); // [1, 2, 3, 4]

// const fruits = ["Apple", "Orange", "Kiwi", "Strawberry"];
// // int fruits[4];

// // fruits.splice(1, 0, "Banana");

// // console.log(fruits); // ["Apple", "Banana", "Orange", "Kiwi", "Strawberry"]
// console.log(fruits[4]); // undefined
// fruits.splice(4, 1, "Banana");

// console.log(fruits); // ["Apple", "Orange", "Kiwi", "Strawberry", "Banana"]

// const arr = [1, 2, 3];
// arr[1000000000] = 10; // Heap memory
// obj = {};
// console.log(arr);

// Slice method
// arr.slice([start], [end]) -> returns new array copying to it all items from
// index start(inclusive) to end(not including end)(exclusive)
// Both start and end can be negative indices

// const numbers = [1, 2, 3, 4, 5];
// //               0  1  2  3  4
// //              -5 -4 -3 -2  -1
// const slicedNumbers = numbers.slice(1, 4); // 1 , 2, 3
// console.log(slicedNumbers); // [2, 3, 4]
// // console.log(numbers);
// console.log(numbers.slice(-2)); // [4, 5]
// console.log(numbers.slice(2)); // [3, 4, 5]

// Question

var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"];
//                 0         1         2        3        4
//                -5        -4        -3       -2          -1
var selected = students.slice(-4, -2);

console.log(students); // ["Simran", "Sakshi", "Komal", "Ishita", "Manya"]

console.log(selected); // ["Sakshi", "Komal"]
