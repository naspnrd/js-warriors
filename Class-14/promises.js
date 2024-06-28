// console.log("start");
// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then((res) => {
//   console.log("resolve", res);
// });
// console.log("end");

// O/P
// start
// end
// resolve
// setTimeout

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => console.log(res));

// console.log(4);

// O/P
// 1
// 2
// 4
// timerStart
// timerEnd
// success

const timer1 = setTimeout(() => {
  console.log("timer1");
  promise1 = Promise.resolve().then(() => {
    console.log("promise1");
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer2");
}, 0);

// O/P
// timer1
// promise1
// timer2
