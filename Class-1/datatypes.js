num = 10; // number
str = "Hello"; // string
bool = true; // boolean
n = null; // null
u = undefined; // undefined
sym = Symbol(); // symbol

let obj = {
  key: "value",
};

// Mutability vs Immutability
/*
Mutable Values are those which can be modified after creation
Immutable Values are those which can't be modified after creation
Diff b/w primitive and non-primitive => 
primitive values are immutable and non-primitive are mutable
primitive values are stored by value
non-primitive values are stored by reference(address)
*/

// store by reference and store by value
// abc = 5;
// dce = abc; // store by value
// abc = 6;
// // dce remain same

// let obj1 = {
//   key: "value",
// };

// obj2 = obj1;
// obj1.key = "value1";

// person = "Neerak";
// person[5] = "j";
// person = "Neeraj";

// typeOf operator -> type of datatype

// console.log(typeof "hello");
// console.log(typeof 0);
// console.log(typeof 1n);
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
