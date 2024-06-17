// const elementById = document.getElementById("heading");

// const elementsByClassName = document.getElementsByClassName("title");

// const elementsByTagName = document.getElementsByTagName("h1");

// const querySelector = document.querySelector(".title");
// const querySelectorCustom = document.querySelector("[data-custom='example']");

// const querySelectorAll = document.querySelectorAll(".title");

// querySelectorAll.forEach((element) => {
//   element.style.backgroundColor = "yellow";
//   element.style.color = "black";
//   element.textContent = "Modified!";
// });

// const querySelectorId = document.querySelector("#heading");

// const parentElement = elementById.parentNode;

// const childElements = parentElement.children;

// const nextSibling = elementById.nextElementSibling.nextElementSibling;

// const prevSibling = elementById.previousElementSibling;

// const descendantElements = document.querySelectorAll("#container .content");
// console.log(descendantElements);

// const childElements = document.querySelectorAll("#container > .content");
// console.log(childElements);

// const input = document.querySelector("input");

// const btn = document.getElementById("btn");

// btn.className = "active-btn";
// // btn.className = "blue-btn";

// btn.className += " blue-btn";

// btn.className += " red-btn";

// console.log(btn.classList);

// btn.classList.add("abc", "hello", "neeraj");

// btn.classList.remove("abc", "blue-btn");

// console.log(btn.classList.contains("active-btn"));

// console.log(btn.classList.contains("abc"));

// btn.classList.toggle("active");
// btn.classList.toggle("neeraj");

// btn.classList.toggle("primary");
// btn.classList.toggle("primary");

// const btns = document.getElementsByTagName("button");
// console.log(btns);
// btns[0].classList.add("primary");
// btns[1].classList.add("secondary");

// innerText

// const exampleDiv = document.getElementById("example");
// console.log(exampleDiv.innerText);

// // innerHTML

// console.log(exampleDiv.innerHTML);

// // exampleDiv.innerHTML = "<p>This is <strong>inner</strong> HTML content.</p>";

// // textContent
// console.log(exampleDiv.textContent);

// const exampleDiv = document.getElementById("example");
// console.log(exampleDiv.style.color);
// console.log(exampleDiv.style.fontSize);

// exampleDiv.style.border = "1px solid black";

const exampleDiv = document.getElementById("example");
const btnGet = document.getElementById("btnGet");
const btnSet = document.getElementById("btnSet");

console.log(exampleDiv.getAttribute("id"));
console.log(exampleDiv.hasAttribute("class"));

exampleDiv.setAttribute("class", "box");

console.log(exampleDiv.hasAttribute("class"));

exampleDiv.removeAttribute("class");
