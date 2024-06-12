// const person = {
//   name: "Neeraj",
//   age: 26,
//   city: "Mathura",
// };

// const arr = ["Neeraj", "Mathura"];
// const [firstName, cityName] = arr;

// const { city, name, age } = person;
// console.log(name, age, city);

// const { city: cityName, name: firstName, age: currentAge } = person;
// console.log(firstName, currentAge, cityName);
// console.log(city);

// const { city = "Anonymous", name = "John Doe", age = 0 } = person;
// console.log(name, age, city);

const person = {
  name: "Neeraj",
  age: 26,
  address: {
    city: "Mathura",
    country: "IN",
  },
};

// const {
//   name,
//   address: { city, country },
// } = person;

// console.log(name, city, country);

const { name, ...rest } = person;

console.log(name, rest);
