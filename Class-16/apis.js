var request = new XMLHttpRequest(); //xhr
request.open("GET", "https://jsonplaceholder.typicode.com/posts");

request.onload = function (event) {
  console.log(event);
  console.log(JSON.parse(event.target.responseText));
};

request.send();

// fetch(url, [options])
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resp) => {
//     return resp.json(); // json data // return a promise
//   })
//   .then((resp) => console.log(resp));

// resp.json() -> JSON
// resp.text() -> plain text
// resp.blob() ->
// resp.arrayBuffer() ->

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((resp) => {
    return resp.json(); // json data // return a promise
  })
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));

let reqHeaders = new Headers();
reqHeaders.append("Content-Type", "application/json");
let initObject = {
  method: "POST",
  headers: reqHeaders,
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts", initObject)
  .then((resp) => {
    return resp.json(); // json data // return a promise
  })
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));

const handleAPICalls = async () => {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    initObject
  );
  const data = await resp.json();
  console.log(data);
};

handleAPICalls();
