// const button = document.getElementById("myButton"); // access the button

// const span = document.getElementsByTagName("span")[0];

// function handleClick(event) {
//   console.log("Button Clicked", event);
//   console.log("Event type: ", event.type);
//   console.log("Target Element: ", event.target);
//   console.log("Current Target Element: ", event.currentTarget);
//   event.preventDefault();
//   event.stopPropagation();
// }

// button.addEventListener("click", handleClick); // attaching an event listener

// // button.removeEventListener("click", handleClick); // removing an event listener

// const listener1 = function (event) {
//   //   console.log("First clicked event!!", event);
//   console.log("Button Clicked", event);
//   console.log("Event type: ", event.type);
//   console.log("Target Element: ", event.target);
//   console.log("Current Target Element: ", event.currentTarget);
//   event.preventDefault();
//   event.stopPropagation();
// };

// const listener2 = function () {
//   console.log("Second clicked event!!");
// };

// span.addEventListener("click", listener1);

// span.addEventListener("click", listener2);

// // span.removeEventListener("click", listener1);

// const input = document.querySelector("input");

// input.addEventListener("focus", function () {
//   console.log("focused");
// });

// input.addEventListener("blur", function () {
//   console.log("blurred");
// });

// input.addEventListener("input", function () {
//   console.log("input event triggered");
// });

// input.addEventListener("change", function () {
//   console.log("change event triggered");
// });

const students = [
  "Neeraj",
  "Lokesh",
  "Kotesh",
  "Nikhil",
  "Aman",
  "Simran",
  "Sonu",
  "Arjun",
  "Vikram",
  "Amit",
];

// const input = document.querySelector("input");

// const namesContainer = document.querySelector("#names-container");

// input
// input.addEventListener("input", function (event) {
//   console.log(event.target.value);
//   const inputValue = event.target.value;

//   //   const { value } = event.target;

//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(inputValue.toLowerCase())
//   );
//   let ul = document.createElement("ul");
//   ul.innerText = "";
//   namesContainer.innerText = "";

//   filteredStudents.forEach((student) => {
//     const li = document.createElement("li");
//     li.innerText = student;
//     ul.appendChild(li);
//   });
//   namesContainer.appendChild(ul);
// });

// change

// input.addEventListener("change", function (event) {
//   console.log(event.target.value);
//   const inputValue = event.target.value;

//   //   const { value } = event.target;

//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(inputValue.toLowerCase())
//   );
//   let ul = document.createElement("ul");

//   ul.innerText = "";
//   namesContainer.innerText = "";

//   filteredStudents.forEach((student) => {
//     const li = document.createElement("li");
//     li.innerText = student;
//     ul.appendChild(li);
//   });
//   namesContainer.appendChild(ul);
// });

const input = document.getElementById("textInput");
const outputElement = document.getElementById("output");

input.addEventListener("keydown", function (event) {
  console.log("Key down: ", event);
  console.log("Key down: ", event.key);
  console.log("Key down: ", event.code);
  console.log("Key down: ", event.keyCode);
  outputElement.textContent += `Key Down: ${event.key} (code: ${event.code}), keyCode: ${event.keyCode}\n`;
});

input.addEventListener("keyup", function (event) {
  console.log("Key up: ", event);
  console.log("Key up: ", event.key);
  console.log("Key up: ", event.code);
  console.log("Key up: ", event.keyCode);
  outputElement.textContent += `Key up: ${event.key} (code: ${event.code}), keyCode: ${event.keyCode}\n`;
});
