// let arr = ["Neeraj", "Madhav"];

// // arr.
// let obj = {
//   name: "neeraj",
//   city: "Mathura",
// };

// console.log(obj);

// console.log(arr);

// function foo() {}

// // __proto__

// let obj1 = {
//   name: "neeraj",
//   city: "Mathura",
// };

// let obj2 = {
//   name: "madhav",
// };

// console.log(obj2.__proto__);
// console.log(Object.prototype);
// obj2.__proto__ = obj1; //
// console.log(obj2.__proto__);

// console.log(obj2.city);

// Object.getPrototypeOf() and Object.setPrototypeOf()

// console.log(Object.getPrototypeOf(obj2));
// Object.setPrototypeOf(obj2, obj1);
// console.log(Object.getPrototypeOf(obj2));

// console.log(obj2.city);

// console.log(Object.getOwnPropertyNames(obj1));
// console.log(Object.getOwnPropertyNames(obj2));

// obj2.name.toString;

const tail = {
  hasTail: true,
};
const pet = {
  legs: 4,
  __proto__: tail,
};
const cat = {
  sound: "Meow!",
  __proto__: pet,
};

console.log(cat.hasTail);
