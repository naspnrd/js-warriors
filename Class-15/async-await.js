// async function f() {
//   //   return 1;
//   throw new Error(2);
// }
// // console.log(f());
// f()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// await new Promise((resolve, reject) => resolve(1)); // Syntax Error

// new Promise((resolve, reject) => resolve(1))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function f() {
//   try {
//     let promise = new Promise((resolve, reject) =>
//       setTimeout(() => resolve(1), 1000)
//     );
//     let res = await promise; // wait until the promise resolves
//     // resume once promise is resolved
//     console.log(res);
//   } catch (error) {
//     console.log("error", error);
//   }
// }
// f();

// function loadJSON(url) {
//   return fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJSON("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function loadJSONAsync(url) {
//   try {
//     let resp = await fetch(url); // wait
//     if (resp.status === 200) {
//       let json = await resp.json(); // wait
//       console.log("json--", json);
//     }
//     throw new Error(resp.status);
//   } catch (error) {
//     console.log(error);
//   }
// }

// loadJSONAsync("https://jsonplaceholder.typicode.com/post");

// async function abc() {
//   console.log("Start");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello World, after 3 seconds");
//     }, 3000);
//   });
//   const data = await promise;
//   console.log(data);
//   console.log("Some Sync Code, also after 3 seconds");
// }

// abc();
// console.log("End");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("hello world");
//   const val = await p;
//   console.log("Hello Everyone");
//   console.log(val);
//   const val2 = await p;
//   console.log("Hello Everyone Again");
//   console.log(val2);
// }

// handlePromise();

// O/P
// hello world
// Hello Everyone
// Promise Resolved Value!
// Hello Everyone Again
// Promise Resolved Value!
//

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value1");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value2");
//   }, 5000);
// });
// async function handlePromise() {
//   console.log("hello world");
//   const val = await p1;
//   console.log("Hello Everyone");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Hello Everyone Again");
//   console.log(val2);
// }

// handlePromise();

// O/P
// hello world
// Hello Everyone
// Promise Resolved Value1
// Hello Everyone Again
// Promise Resolved Value2

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value1");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value2");
//   }, 10000);
// });
// async function handlePromise() {
//   console.log("hello world");
//   const val = await p1;
//   console.log("Hello Everyone");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Hello Everyone Again");
//   console.log(val2);
// }

// handlePromise();

// O/P
// hello world
// Hello Everyone
// Promise Resolved Value1
// Hello Everyone Again
// Promise Resolved Value2

// Questions

// async function a() {
//   try {
//     return await Promise.reject(1);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function b() {
//   try {
//     return Promise.reject(2);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function start() {
//   await a();
//   await b();
// }

// start();

// O/P

// 1
// Uncaught (in promise) 2

const promise = Promise.resolve(); // state -> fulfilled, result -> undefined
console.log(promise);
function f() {
  return promise; // promise object
}
async function a() {
  return f();
  //   let res = f();
  //   res = promise;
  //   return res;
}
async function b() {
  //   return await f();
  //   let result = await f();
  result = await promise; // undefined
  console.log("result --- ", result);
  //   return result;
}
async function c() {
  return f();
}
// console.log(a());
// console.log(b());
// console.log(c());
console.log(a() === a()); // false
console.log(a() === b());
console.log(b() === c());
console.log(a() === c());

// O/P
// false
// false
// false

// function func() {
//   try {
//     console.log(1);
//   } catch (error) {
//     console.log(2);
//   } finally {
//     console.log(3);
//   }
//   console.log(4);
// }
// func();

// O/P
// 1
// 3
// 4

// If finally block present no matter what happens it executes, even a return keyword used inside the try block
// function func() {
//   try {
//     console.log(1);
//     return;
//   } catch (error) {
//     console.log(2);
//   } finally {
//     console.log(3);
//   }
//   console.log(4);
// }
// func();

// O/P
// 1
// 3

// const p1 = () => Promise.resolve(1);

// function func1() {
//   //   p1().then(console.log);
//   // or
//   p1().then((res) => {
//     console.log(res);
//     // 5 seconds
//   });
//   console.log(2);
// }

// async function func2() {
//   await p1();
//   console.log(3);
// }

// function abc() {
//   // long running task
//   // 10 minutes
// }

// console.log(4);
// func1();
// func2();

// O/P
// 4
// 2
// 1
// 3
