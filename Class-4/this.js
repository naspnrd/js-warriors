// const user = {
//   age: 22,
//   getAge() {
//     console.log(this);
//     console.log(this.age);
//   },
// };
// method invocation
// user.getAge();

// function foo() {
//   console.log(this);
// }
// foo();

// this in a func invocation

// function foo() {
//   console.log(this);
// }
// foo();
// "use strict";

// function foo() {
//   console.log(this);
// }
// foo();

// Pitfall: this in an inner Function

// A common trap with function invocation is thinking that (this) is same in an inner func
// as outer func
// The context of the inner func (except arrow functions) depends only on its
// own invocation type but not on outer func context

// const numbers = {
//   numberA: "A",
//   numberB: "B",
//   sum: function () {
//     console.log(this === numbers);
//     function calculate() {
//       console.log(this);
//       console.log(this === numbers);
//       return this.numberA + this.numberB;
//     }
//     return calculate();
//   },
// };

// console.log(numbers.sum());

// How can we go and fix this
// 3 ways to fix it
// 1. preserving the context in outer function

// const numbers = {
//   numberA: "A",
//   numberB: "B",
//   sum: function () {
//     const context = this; // preserved context
//     console.log(this === numbers);
//     function calculate() {
//       console.log(context);
//       console.log(context === numbers);
//       return context.numberA + context.numberB;
//     }
//     return calculate();
//   },
// };

// console.log(numbers.sum());

// Using arrow function

// const numbers = {
//   numberA: "A",
//   numberB: "B",
//   sum: function () {
//     console.log(this === numbers);
//     const calculate = () => {
//       console.log(this);
//       console.log(this === numbers);
//       return this.numberA + this.numberB;
//     };
//     return calculate();
//   },
// };

// console.log(numbers.sum());

// Binding
// Implicit Binding (third highest)
// Explicit Binding (second highest) - call, bind and apply
// Default Binding (lowest)
// new Binding (Highest)

//  call, bind and apply

// call() -> the call method sets the this keyword inside the func
// and immediately executes that function.
// The call method allows for a func/method belonging to one object to be assigned
// and called for a different object.
// call provides a new values of this to the function/method
// Syntax
// function.call(thisArg, arg1, arg2, arg2, ...)

// let name = {
//   firstName: "Neeraj",
//   lastName: "Chaudhary",
//   printFullName: function () {
//     console.log(this);
//     console.log(this.firstName + " " + this.lastName);
//   },
// };
// name.printFullName();

// let name1 = {
//   firstName: "Madhav",
//   lastName: "Singh",
// };

// name.printFullName.call(name1);

// let name = {
//   firstName: "Neeraj",
//   lastName: "Chaudhary",
// };
// let printFullName = function (hometown) {
//   console.log(this);
//   console.log(this.firstName + " " + this.lastName + " from " + hometown);
// };
// printFullName.call(name, "Mathura");

// let name1 = {
//   firstName: "Madhav",
//   lastName: "Singh",
// };

// printFullName.call(name1, "Alwar");

// apply method -> exactly same with call only diff, it's takes arguments in an array
// printFullName.apply(name, ["Mathura"]);
// printFullName.apply(name1, ["Alwar"]);

// Bind -> returns a new binding function, can be called as a normal function later

// const printMyNameBinded = printFullName.bind(name, "Mathura");

// printMyNameBinded();
// printMyNameBinded();
// printMyNameBinded();
// printMyNameBinded();
// printMyNameBinded();

// const numbers = {
//   numberA: "A",
//   numberB: "B",
//   sum: function () {
//     console.log(this === numbers);
//     const calculate = () => {
//       console.log(this);
//       console.log(this === numbers);
//       return this.numberA + this.numberB;
//     };
//     return calculate.call(this);
//   },
// };

// console.log(numbers.sum());

// this in a method invokation
// this is the owner object

// const calc = {
//   nums: 0,
//   increment() {
//     console.log(this === calc);
//     this.nums += 1;
//     return this.nums;
//   },
// };

// console.log(calc.increment());
// console.log(calc.increment());
// console.log(calc.increment());

// const func = calc.increment;
// console.log(func());

// this inside arrow functions
// lexically bind the context (The value of this is the enclosing lexical context where
// the arrow function is defined)

// const y = () => {
//   console.log(this);
// };

// y();

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
//   y: () => {
//     console.log(this);
//   },
// };

// console.log(obj.x()); // {a: 10, x: f, y: f}
// console.log(obj.y()); // global object

const obj = {
  a: 10,
  x: function () {
    console.log(this);
    const y = () => {
      console.log(this);
    };
    y();
  },
};

console.log(obj.x());
