document.querySelector("#grandParent").addEventListener(
  "click",
  (event) => {
    // event.stopPropagation();
    console.log("GrandParent Clicked!");
  },
  true
);

// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent Clicked!");
//   },
//   false
// );

document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    console.log("Parent Clicked!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    // event.stopPropagation();
    console.log("Child Clicked!");
  },
  true
);

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked!");
//   },
//   false
// );
// document.head.addEventListener(
//   "click",
//   function () {
//     console.log("head clicked!");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   function () {
//     console.log("body clicked!");
//   },
//   true
// );
// document.addEventListener(
//   "click",
//   function () {
//     console.log("document clicked!");
//   },
//   false
// );
// window.addEventListener(
//   "click",
//   function () {
//     console.log("window clicked!");
//   },
//   true
// );
