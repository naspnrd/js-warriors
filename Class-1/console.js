// ways to output data

// Explain the console

// 1. console.log()
// commonly used method for logging messages to console
// accepts list of params, with each param being logged to console
// we mostly use this for logging and debugging

console.log("Hello, World");
console.log("Hello, World", "This is", "javascript class");

// 2. console.info() -> informational message

console.info("This is an informational message......");

//3. console.error() -> errors or console.warn() -> warnings

console.error("This is an error message");

console.warn("This is an warning message");

// console.clear() -> used to clear the clone
console.clear();

// console.table() -> used to display data in tabular form

const data = [
  {
    name: "Neeraj",
    age: 30,
  },
  {
    name: "Madhav",
    age: 22,
  },
  {
    name: "Yash",
    age: 30,
  },
];

console.table(data);
