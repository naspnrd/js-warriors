// console.log("Task1"); // line by line
// console.log("Task2");
/*
A task taking some time to execute
*/

// console.log("Task3");
// console.log("Task4");

/* 
Task1
Task2
Task3
Task4
*/

// console.log("One!");
// console.log("Two!");

// function logThree() {
//   console.log("Three!");
// }

// function logThreeAndFour() {
//   logThree();
//   console.log("Four!");
// }

// logThreeAndFour();

// function longRunningTask() {
//   let count = 0;
//   for (let i = 0; i < 1e9; i++) {
//     count++;
//   }
//   console.log("Long task done!", count);
// }

// function importantTask() {
//   console.log("Important!");
// }

// longRunningTask();
// importantTask();

// Callback Based

// we will use geolocation api and we want to get the location of user

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (error) => console.log(error)
// );

// navigator.geolocation.getCurrentPosition(
//   (position1) => console.log(position1),
//   (error1) => console.log(error1)
// );

// setTimeout
// setTimeout is used to execute a function or piece of code after a specified delay (in milliseconds)

// setTimeout(function, delay, ...arguments);

// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 3 seconds");
// }, 3000); // 1000ms = 1 sec

/*
5 million lines of code - sync => 20 seconds
function abc(){
    // 15 seconds to execute
}
function cde(){
    // 5 seconds
}
*/
// console.log("End");

// function greet(name, message) {
//   console.log(`Hello ${name}, ${message}`);
// }

// const timerId = setTimeout(greet, 5000, "Ankit", "welcome to the js module");
// const timerId1 = setTimeout(greet, 5000, "Ankit", "welcome to the js module");
// const timerId2 = setTimeout(greet, 5000, "Ankit", "welcome to the js module");

// clearTimeout(timerId);

//setInterval
// used to repeatedly execute a function at specified intervals (in milliseconds)

// setInterval(function, interval, ...arguments)

// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 15) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// let start = 1;
// function countUp(name) {
//   console.log("pre ---", start);
//   console.log(`${name} says the count is ${start}`); //
//   start++; // 2
//   if (start === 15) {
//     clearInterval(intervalId);
//   }
//   console.log("post ---", start);
// }
// const intervalId = setInterval(countUp, 1000, "Neeraj");

// console.log("Start");
// document.getElementById("btn").addEventListener("click", function cb() {
//   console.log("Callback");
// });
// console.log("End");

// setTimeout(() => {
//   console.log("2000ms");
// }, 2000);

// setTimeout(() => {
//   console.log("100ms");
// }, 100);

// console.log("End of script!");

// function x() {
//   var i = 2;
//   y();
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   console.log("Javascript Classes");
// }

// function y() {
//   console.log("y");
// }

// x();
// y();

// setTimeout(function(){

// }, 1000);

// setInterval(function(){

// }, 1000);

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// post hoisting

// function x() {
//   var i;
//   for (i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// fix with let

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// fix it without let variable

function x() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Javascript Classes");
}

x();
