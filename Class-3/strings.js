const singleQuotes = "Hello, Wolrd!";
const doubleQuotes = "Hello, Wolrd!";
const name = "Neeraj";
const backTicks = `Hello, ${name}`;

let guestList = `Guets: 
* Neeraj
* Rahul
* Vijay
`;
// console.log(guestList);

// Escape Chars -> \n(newline), \t(tab), \\(backslash)

// const str = "Hello\tWorld!";

// const str1 = "Hello 'World' ";
// const str2 = 'Hello "World" ';
// console.log(str2);

// string concatenation

// const str1 = "Hello";
// const str2 = "World";

// const result = str1 + " " + str2 + "!";
// console.log(result);

// string comparison

// console.log("hello" == "hello"); // true
// console.log(5 == "5"); // true (type coerced)
// console.log(5 === "5"); // false (not type coerced)

// string methods

// 1. length

// const str = "Hello";
// console.log(str.length); // 5
// console.log({ str });
// const num = 5;
// console.log({ num });

// console.log(num.toString());

// 2. slice(startIndex(inclusive), endIndex(exclusive))
// const str = "Hello, World!";

// console.log(str.slice(7, 12));
// console.log(str.slice(-4, -2));

// substringstartIndex(inclusive), endIndex(exclusive)
// doesn't allow negative indices

// const str = "Hello, World!";

// console.log(str.substring(7, 12));
// console.log(str.substring(-4, -2));

// replace(searchValue, replaceVal) and replaceAll(searchValue, replaceVal)

// const str = "Hello, World! World";
// // console.log(str.replace("World", "Universe"));
// // console.log(str.replaceAll("World", "Universe"));
// console.log(str.replaceAll("o", "0"));

// toUpperCase()
// convert a string to uppercase
// const str = "Hello, World! World";
// console.log(str.toUpperCase());

// // toLowerCase()
// // convert a string to lowercase

// console.log(str.toLocaleLowerCase());

// concat()
// const str1 = "Hello";
// const str2 = "World!";

// console.log(str1.concat(", ", str2, "!"));

// trim()
// removes whitespaces from both ends of string

// const str = "           Hello,     World!         ";

// console.log(str);

// console.log(str.trim());

// // charAt(index)
// const str = "Hello";
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));
// const str2 = "65";
// console.log(String.fromCharCode(str2));

// split(separator, limit)
// Splits a string into an array of substrings based on the specified separator
// and optional limit

const userName = "Neeraj Chaudhary";
console.log(userName.split("e"));

const [firstName, lastName] = userName.split(" ");
console.log(firstName, lastName);
