// const obj = {
//   key: "value",
// };

// object creation

// 1. object literal
// const obj = {};

// const obj1 = new Object();
// obj1.name = "neeraj";
// console.log(obj1);

// const obj2 = Object.create(obj1);
// console.log(obj2);

// How to access object
// 1. Dot(.) notation -> it requires the key be a valid identifier
// Contains no spaces
// Doesn't start with digit
// Does not include special chars(only allowed $, &, _)

const person = {
  name: "Neeraj",
  age: 3,
  0: "Hello",
  greet: function () {
    console.log("Hello Fn");
  },
};
console.log(person.age);

// 2. Bracket Notation [] - works with any string

// console.log(person["age"]);
// console.log(person[0]);
// console.log(person["0"]);
// console.log(person.greet());

// property names limitations

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj.for + obj.let + obj.return);

// // delete a property from obj

// delete obj.for;
// console.log(obj);

// const num = 4;
// delete num; // no error will be thrown
// console.log(num);

// property existence -> in operator

// const obj = {
//   name: "neeraj",
// };

// // console.log(obj.age); // no error // undefined

// console.log(obj.age === undefined); // no error // undefined

// // Syntax
// "Key" in object;

let user = {
  name: "neeraj",
  age: 22,
  bla: undefined,
};

// console.log("age" in user);
// console.log("bla" in user);

// hasOwnProperty Method -> used to check if an object has a specific property
// and it only check the property that belong to the object and not inherited from
// prototypes

console.log(user.hasOwnProperty("aaaa"));
