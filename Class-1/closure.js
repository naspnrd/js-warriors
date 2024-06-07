// Closures -> Functions along with it's lexical scope/Env
// bundled together
// in Layman Terms -> the returning function has access to the
// outer or enclosing scope

// function outerFunction() {
//   const outerVar = "I'm a outer variable";
//   function innerFunction() {
//     console.log(outerVar);
//   }
//   return innerFunction;
// }

// const innerFunc = outerFunction();
// innerFunc();

// Usecase
// Currying
// Memoization
// Module Design Pattern
// Data Hiding ie Encapsulation

// let counter = 0;
// function Counter() {
//   counter++;
//   console.log(counter);
// }
// Counter();
// Counter();
// counter = 0; // it is a bug or not? yeah it
// Counter();
// Counter();
// Counter();

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  return {
    increment,
    decrement,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.increment(); // 2
counter.increment(); // 3

// Disadvantage

// Memory Leakage -> HW
