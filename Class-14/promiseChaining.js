// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then((res) => {
//   console.log(res); // 1
//   return res * 2; // 2
// });

// promise.then((res) => {
//   console.log(res); // 1
//   return res * 2; // 2
// });

// promise.then((res) => {
//   console.log(res); // 1
//   return res * 2; // 2
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((res) => {
//     console.log(res); // 1
//     return 2;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(res * 2), 1000);
//     });
//     // return res;
//   })
//   .then((res) => {
//     console.log(res);
//     return 2;
//   });
//   .then((res) => console.log(res))
//   .then((res) => console.log(res))
//   .then((res) => console.log(res))
//   .then((res) => console.log(res))
//   .then((res) => console.log(res));

// 1
//2

// const prom1 = new Promise((resolve) => {
//   resolve(1);
// });
// const prom2 = new Promise((resolve) => {
//   resolve(2);
// });
// const prom3 = new Promise((resolve) => {
//   resolve(3);
// });
// const prom4 = new Promise((resolve) => {
//   resolve(4);
//   prom2
//     .then((res) => console.log(res))
//     // .then(onFulfilled, onRejected)
//     .then(() => {
//       prom3.then((res) => console.log(res));
//       console.log(5);
//     });
// });
// prom1.then((res) => console.log(res));
// prom4.then((res) => console.log(res));

// O/P
// 2
// 1
// 4
// 5
// 3

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);
// setTimeout(() => {
//   console.log(3);
// }, 0);

// new Promise((_, reject) => {
//   console.log(4);
//   reject(5);
//   console.log(6);
// })
//   .then(() => console.log(7))
//   .catch(() => console.log(8))
//   .then(() => console.log(9))
//   .catch(() => console.log(10))
//   .then(() => console.log(11))
//   .then(console.log)
//   .finally(() => console.log(12));
// console.log(13);

// O/P
/*
1
4
6
13
8
9
11
undefined
12
3
2
*/

// function job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

// let promise = job();
// promise
//   .then(() => {
//     console.log("Success 1");
//   })
//   .then(() => {
//     console.log("Success 2");
//   })
//   .then(() => {
//     console.log("Success 3");
//   })
//   .catch(() => {
//     console.log("Error 1");
//     // throw new Error("Error 2");
//     return Promise.resolve("Error 2");
//   })
//   .then((res) => {
//     console.log("Success 4", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// O/P
// Error 1
// Success 4

new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject(3);
  console.log(4);
}).then(
  (value) => {
    console.log(value);
  }, // onFulfilled
  (error) => {
    console.log(error);
  } // onRejected
);

// O/P
// 1
