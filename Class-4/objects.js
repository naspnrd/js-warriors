// Object.create() Method

// const greetingPrototype = {
//   greeting: function () {
//     return "Welcome to " + this.name;
//   },
// };

// const addInfo = Object.create(greetingPrototype, {
//   name: {
//     value: "Javascript Classes!",
//   },
// });

// console.log(addInfo.greeting());

// const movie = {
//   title: "Kalki AD 2898",
//   director: "Nagi",
//   releaseDate: "27 June",
// };

// // Object.keys()

// const moviesKeys = Object.keys(movie);
// console.log(moviesKeys);

// // Object.enteries()
// const movieEntries = Object.entries(movie);
// console.log(movieEntries);

// // Object.values

// const movieValues = Object.values(movie);
// console.log(movieValues);

// properties and Descriptors
// ways to Iterate Object
// for in loops
// keys methods from object constructor functions

// const user = {
//   name: "Neeraj", // instancer member
// };

// Object.prototype.age = 25;
// for (let key in user) {
//   if (user.hasOwnProperty(key)) console.log(key);
// }

// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

let user = {};
Object.defineProperty(user, "name", {
  value: "Neeraj",
  writable: true,
  enumerable: true,
  configurable: true,
});
delete user.name;

for (let key in user) {
  console.log(key);
}

// user.name = "Madhav";
// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor);

// console.log(user);

// let user1 = {
//   name: "Neeraj",
// };

// let descriptor1 = Object.getOwnPropertyDescriptor(user1, "name");
// console.log(descriptor1);

let userDetails = {
  name: "Neeraj",
  age: 25,
  adhaarNo: 12345,
};

Object.defineProperty(userDetails, "adhaarNo", {
  value: "Neeraj",
  writable: false,
  enumerable: true,
  configurable: false,
});

delete userDetails.adhaarNo;
delete userDetails.age;
