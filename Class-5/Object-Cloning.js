// primtive data types (call by value)
// Non-primtive data types (call by reference)

// let str = "Hello";
// let copy = str;
// copy = "Hi";

// str="Hello" copy = "Hi"

// let obj = { a: 1, b: 2 };
// let objCopy = obj; // passing the reference
// objCopy.b = 4;

// console.log(obj);
// console.log(objCopy);

// // how we can fix it
// // Cloning the object is the answer

// function foo(a) {}
// let a = 5;

// foo(a);

// foo(obj);

// Cloning of object
// Object.assign() and spread(...) operator

// let person = { name: "neeraj", age: 22 };
// let clone = Object.assign({}, person);
// let cloneSpread = { ...person };
// person.age = 25;

// let person = {
//   name: "neeraj", // level 1
//   age: 22, // level
//   size: {
//     height: 180, // level 2
//     weight: 90, // level 2
//   },
// };

// let clone = Object.assign({}, person); // shallow cloning
// // let cloneSpread = { ...person }; // shallow cloning
// console.log(person == clone); // false
// console.log(person.size === clone.size); // true

// person.size.height++; // 181
// console.log(clone.size.height); //

// deep function

let person = {
  name: "neeraj", // level 1
  age: 22, // level
  size: {
    height: 180, // level 2
    weight: 90, // level 2
  },
  //   arr: [],
};

for (let key in person) {
  console.log(person[key]); // "neeraj", 22, {}
}
function deepCopy(input) {
  //   var res = {};
  var res = Array.isArray(input) ? [] : {};
  // base case
  if (typeof input !== "object") return input;
  for (let key in input) {
    res[key] = deepCopy(input[key]);
  }
  return res;
}

const clone = deepCopy(person);

console.log(person == clone); // false
console.log(person.size === clone.size); // false

person.size.height++; // 181
console.log(clone.size.height); // 180
