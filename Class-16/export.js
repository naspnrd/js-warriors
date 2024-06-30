// let months = ["Jan", "Feb", "Mar"];
// const YEAR = 2024;

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// export { months, YEAR, User }; // single/named export

// export let firstName = "Neeraj";

// export default function sum(a, b) {
//   return a + b;
// }

// // export let obj {
// //     // contains everything
// // }

// // default export let obj {
// //     // contains everything
// // }

// module.js

// foo = 25;
// export default function foo() {}

// HW
let foo = "bar";
export { foo };

export default foo;

setTimeout(() => {
  foo = "baz";
}, 1000);

// export default "bar";
