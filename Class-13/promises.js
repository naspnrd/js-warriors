// let promise = new Promise((resolve, reject) => {
//   //   resolve(1);
//   reject(1);
// });

// function executor(resolve, reject) {}

// new Promise(executor);

// let promise = new Promise((resolve, reject) => {
//   resolve(1);
// });

// promise.then((result) => console.log(result));

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000);
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error)) // => // .then(_, (error) => console.log(error))
//   .finally((val) => {
//     console.log("hello",);
//   }); // all called
//   .then(
//     (result) => console.log(result), // onFulFilled
//     (error) => console.log(error) // onRejected
//   )
//   .finally(() => {
//     console.log("hello");
//   }); // all called

// new Promise((resolve) => {
//   console.log(1);
//   resolve(2);
// }).then((result) => console.log(result));

// console.log(3);

// Promisifying the callback APIs

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (error) => console.log(error)
// );

// function getCurrentPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getCurrentPosition()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Promise.resolve(1).then(console.log);

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// O/P
// start
// 1
// end
// 2

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res); // async
// });

// console.log("end");

// O/P
// start
// 1
// 3
// end
// 2

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(res); // async
// });

// console.log("end");

// O/P
// start
// 1
// end

console.log("start");
const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    reject("failure");
  });
};
console.log("middle");

// let promise = fn();
// promise
fn()
  .then((res) => {
    console.log(res); // async
  })
  .catch((error) => {
    console.log(error); // async
  });

console.log("end");

// O/P
// start
// middle
// 1
// end
// failure
