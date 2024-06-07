// `${}` -> template literals
// In JS, `${}` exp are used within template literals for
// insert dynamic content into strings

name = "Neeraj";
greeting = `Hello ${name}!`;
console.log(greeting);

// Mutliline strings
// abc = "Hello
// Neeraj
// "
// console.log(abc)

const message = `
                Hello, ${name}!
                Welcome to our Javascript Class
`;

console.log(message);

// complex expression

n1 = 10;
n2 = 20;
result = `The sum of ${n1} and ${n2} is ${n1 + n2}`;
console.log(result);

// HTML Templating
productList = `
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>${n1}</li>
                <li>${n2}</li>
            </ul>
`;

document.body.innerHTML = productList;
