/*
 * Hoisting -> is a phenomenon by which we can access the variables
    and functions before we initialize it.
 */

// 4 ways to declare variables, object, functions
// a = 5; // global scope -> attach to window object

// var b = 10; // global scope -> attach to window object

// let c = 20; // script scope
// const d = 25; // scipt scope

// {
//   let e = 10; // block scope
//   const j = 222; // block scope
// }

// before hoisting

// console.log(x);
// var x = 10;
// console.log(x);
// foo();
// function foo() {
//   console.log("Hello");
// }

// // post hoisting
// var x;
// function foo() {
//   console.log("Hello");
// }
// console.log(x);
// x = 10;
// console.log(x);
// foo();

// Example

// bar(); // Hello
// console.log(x); // undefined
// var x = 10;
// function bar() {
//   console.log("Hello");
// }

// console.log(x); // undefined
// // console.log(y); // Reference Error: Cannot access 'y' before initialization
// console.log(z); // Reference Error: Cannot access 'z' before initialization
// var x = 5;
// let y = 6;
// const z = 6;
// var x; // this get's hoisted ie declaration
// var x = 5; // not initialization

// what's diff between let and const
// let a = 5;
// a = 6;

// const b = 7;
// b = 8; // TypeError

// before hoisting
// var a = 5;

// function foo() {}

// post hoisting

// function foo() {}
// var a;
// a = 5;

// before hoisting
// var a = 5;
// foo();
// foo = 6;
// console.log(foo);
// console.log(a);
// function foo() {
//   console.log("foo");
// }

// // post hoisting
// function foo() {
//   console.log("foo");
// }
// var a;
// a = 5;
// foo();
// foo = 6;
// console.log(foo);
// console.log(a);

// Example
var a = 123;
var b = "abc";
function foo() {
  var c = 456;
  var d = "def";
}

// post hoisting

function foo() {
  var c;
  var d;
  c = 456;
  d = "def";
}
var a;
var b;
a = 123;
b = "abc";
