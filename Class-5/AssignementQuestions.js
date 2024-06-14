function AscendingSort(initial) {
  // sort it
  return initial.sort((a, b) => a.libraryID - b.libraryID);
}

var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  var sortedObj = AscendingSort(obj);
  for (var i = 0; i < sortedObj.length; i++) {
    console.log(
      sortedObj[i].title +
        "-" +
        sortedObj[i].author +
        "-" +
        sortedObj[i].libraryID
    );
  }
  readline.close();
}

function DecendingSort(initial) {
  //Write your code here
  return initial.sort((a, b) => b.libraryID - a.libraryID);
}

// DO NOT CHANGE THE CODE BELOW
var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  var sortedObj = DecendingSort(obj);
  // console.log(sortedObj)
  for (var i = 0; i < sortedObj.length; i++) {
    console.log(
      sortedObj[i].title +
        "-" +
        sortedObj[i].author +
        "-" +
        sortedObj[i].libraryID
    );
  }
  readline.close();
}
