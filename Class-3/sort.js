// sort() methid -> inplace
// sorting -> alphabetically

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

const numbers = [31, 10, 5, 2, 4];
// numbers.sort();

// console.log(numbers);

// compare Functions

// function compare(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }
function compare(a, b) {
  return a - b;
}

// numbers.sort(compare);
numbers.sort((a, b) => a - b);

console.log(numbers);
// > 0 -> sort b before a
//  < 0 -> sort a befor b;
// === 0 -> keep original order of a and b
