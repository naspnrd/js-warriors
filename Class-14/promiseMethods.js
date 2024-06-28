// Promise.all()

// let p1 = Promise.reject(3);
// let p2 = 10; // Promise.resolve(p2)
// let p3 = new Promise((resolve, reject) => {
//   // setTimeout(resolve, 100, "success");
//   setTimeout(reject, 3000, "failure");
// });
// let p4 = Promise.reject(11);

// Promise.all([p1, p2, p3, p4])
//   // {
//   //     let res = []
//   //     p1.then(res.push())
//   //     p2.then()
//   //     p3.then()
//   //     .catch(return error)
//   //     p4.then()

//   // }
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => console.log("error --", error));

// console.log("I'm here");

// Promise.race

// Promise.race([p1, p2, p3, p4])
// Promise.race([p3, p4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => console.log("error --", error));

// Promise.any

// Promise.any([p1, p3, p4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log("error --", error);
//     console.log(error.constructor.name);
//     console.log(error.errors);
//   });

// Promise.settled
// [
// {
//     status: "fulfilled", value: result
// }
// {
//     status: "rejected", reason: error
// }

// ]
// Promise.allSettled([p1, p2, p3, p4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log("error --", error);
//   });

// Promise.resolve()

// let resolvedPromise = Promise.resolve("resolve");
// resolvedPromise.then((res) => console.log(res));

// // Promise.reject()

// let rejectedPromise = Promise.reject("rejected");
// rejectedPromise.catch((error) => console.log(error));
