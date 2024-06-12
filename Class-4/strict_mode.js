// coding in sloppy mode

// let user = {};
// Object.defineProperty(user, "name", {
//   value: "Neeraj",
// });
// delete user.name;

"use strict";

// undeclared variables

// userName = "Neeraj"; // Reference Error: userName is not defined
// const userName = "Neeraj";
// console.log(userName);

// Object property assignment
// 3 siturations
// Non-writable property
let user = {};
Object.defineProperty(user, "name", {
  value: "Neeraj",
});
delete user.name;
// continue coding in strict mode

// function strictFunction() {
//   "use strict";
//   // code in strict mode
// }

// Error scenarios

// function strictFunction(a = 10) {
//     "use strict";
//     // code in strict mode
//   }

// function strictFunction(...params) {
//   "use strict";
//   // code in strict mode
// }

// function strictFunction({params}) {
//     "use strict";
//     // code in strict mode
//   }
