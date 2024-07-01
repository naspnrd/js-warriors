// Local Storage

// 5 - 10MB => 5MB(chrome)
// localStorage.setItem("key", "value");

// console.log(localStorage.getItem("key1"));

// localStorage.removeItem("key");

// localStorage.clear();

// Session Storage

//  {
//  key : value
// }
// sessionStorage.setItem("key", "value");
// sessionStorage.setItem("key", 5);

// console.log(typeof sessionStorage.getItem("key"));

// // sessionStorage.removeItem("key");

// sessionStorage.clear();

// How to store objects in local/session storage

// const user = {
//   name: "neeraj",
//   age: 26,
// };

// localStorage.setItem("user", JSON.stringify(user)); //

// console.log(JSON.parse(localStorage.getItem("user")));

let loggedInUser = localStorage.getItem("user");
if (loggedInUser) {
  document.body.innerHTML += `<h1>User is Logged In - ${loggedInUser}</h1>`;
} else {
  document.body.innerHTML += `<h1>User is not Logged In</h1>`;
}

document.getElementById("submit").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  localStorage.setItem("user", email);
  window.location.reload();
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.reload();
});
