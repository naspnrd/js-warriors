// Truthy/Falsy Concept

// There are six falsy values in js
/*
 * false - boolean false
 * 0 -> number zero
 * "" -> empty string
 * Null -> means an empty or non-existent value
 * undefined
 * NaN(not a number)
 */

// undefined
// let x;
// if (x === undefined) console.log("This will be executed");

// NaN
// if (isNaN("Hello")) console.log("This will be executed");
if (isNaN(2)) console.log("This will be executed");
else console.log("else");

// truthy values
/*
 * Any non-empty string
 * Any non-zero number
 * Objects(including arrays and functions)
 * true
 */
