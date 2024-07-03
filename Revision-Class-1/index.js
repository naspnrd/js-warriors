// Q. What's the output ?

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Neeraj";
//   age = 21;
// }

// sayHi();

// A: Neeraj and undefined
// B: Neeraj and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Q. What's the output?

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// A: true false true
// B: false false true
// C: true false false
// D: false true true

// Q. What's the output?

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, "2"));

// A: NaN;
// B: TypeError;
// C: "12";
// D: 3;

// Q. What's the output?

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// getAge();

// A: 21;
// B: undefined;
// C: ReferenceError;
// D: TypeError;

// Q. What's the output?

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// A: 1 2
// B: 1 2 3
// C: 1 2 4
// D: 1 3 4

// Q. What's the output?

// const person = { firstName: "Neeraj" };

// function sayHi(age) {
//   return `${this.firstName} is ${age}`;
// }

// // console.log(sayHi(22));
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// // const bindedFunc = sayHi.bind(person, 21);
// // console.log(bindedFunc());

// A: undefined is 21 Neeraj is 21
// B: function function
// C: Neeraj is 21 Neeraj is 21
// D: Neeraj is 21 function

// Q. What's the output?

// const person = {
//   name: "Neeraj",
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

// A: { name: "Neeraj" }, { age: 21 }
// B: "name", "age"
// C: "Neeraj", 21
// D: ["name", "Neeraj"], ["age", 21]

// Q. this keyword

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function () {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     })();
//   },
// };
// myObject.func();

// Q. this keyword

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);

//     const doo = () => {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     };

//     doo();
//   },
// };
// myObject.func();

// Q. this keyword

// const person = {
//   name: "Neeraj",
//   getName: function () {
//     return `${this.name} is my name`;
//   },
// };

// console.log(person.getName());

// Q. this keyword

// const person = {
//   abc: "Neeraj",
//   getName: () => {
//     return `${this.abc} is my name`;
//   },
// };
// console.log(person.getName());

// Q. this keyword

// function User() {
//   this.firstName = "Neeraj Chaudhary";
//   this.score = 20;
//   this.sayUser = function () {
//     console.log(this.firstName);

//     function innerFunction() {
//       console.log(this.firstName);
//     }

//     innerFunction();
//   };
// }
// let name = new User();
// name.sayUser();

// Q. this keyword

// const user = {
//   innerFunction: () => {
//     console.log(this.firstName);
//   },
// };
// console.log(user.innerFunction());

// function User() {
//   this.firstName = "Neeraj Chaudhary";
//   this.score = 20;
//   this.sayUser = function () {
//     console.log(this.firstName);

//     const innerFunction = () => {
//       console.log(this.firstName);
//     };

//     innerFunction();
//   };
//   this.innerFunction = () => {
//     console.log(this.firstName);
//   };
// }
// let name = new User();
// console.log(name);
// name.sayUser();
// name.innerFunction();

// Q. What's the output?

// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);
// A: [1, 1, 2, 3, 4];
// B: [1, 2, 3, 4];
// C: {
//   1, 1, 2, 3, 4;
// }
// D: {
//   1, 2, 3, 4;
// }

// Q. What's the output?

// const settings = {
//   username: "Neeraj Chaudhary",
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// A: "{"level":19, "health":90}"
// B: "{"username": "Neeraj Chaudhary"}"
// C: "["level", "health"]"
// D: "{"username": "Neeraj Chaudhary", "level":19, "health":90}"

// Q. What's the output?

// const box = {
//   x: 10,
//   y: 20,
// };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// A: { x: 100, y: 20 }
// B: { x: 10, y: 20 }
// C: { x: 100 }
// D: ReferenceError

// Q. What is the output?

// const add = () => {
//   const cache = {};
//   return (num) => {
//     console.log("cache--", cache);
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     }
//     const result = num + 10;
//     cache[num] = result;
//     return `Calculated! ${result}`;
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

// A: Calculated! 20 Calculated! 20 Calculated! 20
// B: Calculated! 20 From cache! 20 Calculated! 20
// C: Calculated! 20 From cache! 20 From cache! 20
// D: Calculated! 20 From cache! 20 Error

// Q. What is the output?

// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

// for (let item in myLifeSummedUp) {
//   console.log(item);
// }

// for (let item in myLifeSummedUp) {
//   console.log(item);
// }

// A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
// B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
// C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
// D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// ------------------------------------Covered So Far END------------------------

// Q. What's the output?

// const fruit = ["🍌", "🍊", "🍎"];

// fruit.slice(0, 1);
// fruit.splice(0, 1);
// fruit.unshift("🍇");

// console.log(fruit);

// A: ["🍌", "🍊", "🍎"];
// B: ["🍊", "🍎"];
// C: ["🍇", "🍊", "🍎"];
// D: ["🍇", "🍌", "🍊", "🍎"];

// Q. What's the output?

// var a = 1;
// {
//   var a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Q. What's the output?

// let a = 1;
// {
//   let a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Q. What's the output?

// const a = 1;
// {
//   const a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Q. What's the output?

// var a = 1;

// function x() {
//   var a = 2;
//   console.log("Inside Function", a);
// }
// x();
// console.log("Outside Function", a);

// Q. What's the output?

// let a = 1;

// function x() {
//   let a = 2;
//   console.log("Inside Function", a);
// }
// x();
// console.log("Outside Function", a);

// Q. Implement this
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// Q. What's the output?

// var a = 1;
// {
//   var a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Q. What's the output?

// let a = 1;
// {
//   let a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Q. What's the output?

// const a = 1;
// {
//   const a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Q. What's the output?

// var a = 1;

// function x() {
//   var a = 2;
//   console.log("Inside Function ", a);
// }

// x();
// console.log("Outside Function ", a);

// Q. What's the output?

// let a = 1;

// function x() {
//   let a = 2;
//   console.log("Inside Function", a);
// }
// x();
// console.log("Outside Function", a);

// Q. output

// console.log("5" - -"3");

// Q. output

// (function () {
//   var a = b = 5;
// })();
// console.log(b);

// Q. output
// BODMAS
console.log(1 + "2" + "2"); // "122"
console.log(1 + +"2" + "2"); // "32" // (1 + +"2" + "2") => ((1 + (+"2")) + "2")) => ((1 + 2) + "2") => (3 + "2") => "32"
console.log(1 + -"1" + "2"); // "02" // ((1 + (-"1")) + "2") => ((1 + -1) + "2") => ((1 - 1) + "2") => (0 + "2") => "02"
console.log(+"1" + "1" + "2"); // "112" // (((+"1") + "1") + "2") => ((1 + "1") + "2") => ("11" + "2") => "112"
console.log("A" - "B" + "2"); // "NaN2" // ("A" - "B" + "2") => (NaN + "2") => "NaN2"
console.log("A" - "B" + 2); // NaN
console.log(typeof +"2"); // number
console.log(1 + "2" * 3); // 7 // (1 + ("2" * 3)) => (1 + 6) => 7
console.log(1 + "2" * "3"); // 7
console.log("1" + "2" * "3"); // "16" // ("1" + ("2" * 3)) => ("1" + 6) => "16"

console.log("5" - -"3"); // 8 // ("5" - -"3") => ("5" - (-"3")) => ("5" - -3 ) => (5 - -3) => (5 + 3) // 8
