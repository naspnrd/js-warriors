// // ES6 module importing

// import { months, User } from "./export.js";
// import * as exportFile from "./export.js";

// import sum from "./export.js";
// import { YEAR as currentYear } from "./export.js";

// console.log(months, User, currentYear);
// console.log(sum(1, 2));
// console.log(exportFile);
// console.log(exportFile.firstName);

// index.js

// import foo from "./export.js";

// console.log(typeof foo);

// HW
import defaultFoo, { foo } from "./export.js";

setTimeout(() => {
  console.log(foo);
  console.log(defaultFoo);
}, 2000);

// default is the name of export
// foo is the name of the variable
// import { default as foo } from "./export.js"; // default is reserved keyword
// console.log(foo);
