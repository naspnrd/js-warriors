// let obj = {
//   name: "Neeraj",
//   city: "Mathura",
//   age: 22,
//   address: {
//     location: "Mathura",
//     country: "IN",
//   },
//   isMarried: false,
//   hobbies: ["bike riding", "gaming", "binge watching series", "travelling"],
//   girlfriend: null,
// };

// // Methods

// // JSON.stringify() -> convert json object into a string
// // keep in mind that a valid json object syntax is a valid object in js

// console.log(obj);
// const stringifiedObj = JSON.stringify(obj);
// console.log(stringifiedObj);

// limitations
// 1. Circular References
// const obj = {};
// obj.circularRef = obj;
// console.log(obj);
// const stringifiedObj = JSON.stringify(obj); // TypeError
// const stringifiedObj = JSON.stringify(obj); // TypeError
// console.log(stringifiedObj);

// 2. Functions & Non-serializable

// let obj = {
//   name: "Neeraj",
//   city: "Mathura",
//   greet: function () {
//     console.log("Hello ", this.name);
//   },
//   address: undefined,
// };
// console.log(obj);

// const stringifiedObj = JSON.stringify(obj);
// console.log(stringifiedObj);

// JSON.parse()

let obj = {
  name: "Neeraj",
  city: "Mathura",
  age: 22,
  address: {
    location: "Mathura",
    country: "IN",
  },
  isMarried: false,
  hobbies: ["bike riding", "gaming", "binge watching series", "travelling"],
  girlfriend: null,
};

// const stringifiedObj = JSON.stringify(obj);

// console.log(stringifiedObj);

// const parsedObj = JSON.parse(stringifiedObj);

// console.log(parsedObj);

// limitations
// 1. invalid JSON

// const jsonString = '{name: "Neeraj", age: 30}'; // invalid
// // const jsonString = '{"name": "Neeraj", "age": 30}'; // valid

// const parsedString = JSON.parse(jsonString);

// console.log(parsedString);

// 2. Security Risks

// need to check this one

// let obj1 = {};
// console.log(obj1.toString());
// const jsonString =
//   // '{"name": "Neeraj", "age": 30, "__proto__":{"isAdmin": true}}';
//   '{"name": "Neeraj", "age": 30, "__proto__": {"toString" : "fakeToString"}}';

// const parsedObj = JSON.parse(jsonString);
// // console.log(parsedObj);
// console.log(parsedObj.toString);

// Diff between JSON and JS Objects

// key converted to string only at the end
// {
//   name: "Neeraj";
//   lastName: "Chaudhary";
// }

// // JSON
// {
//   "name": "Neeraj";
//   "lastName": "Chaudhary";
// }
