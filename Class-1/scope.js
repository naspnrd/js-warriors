// scope -> means where you can access a specific variables, funcs, objects inside
// your code

// global scope or parent scope
// function abc() {
//   // local scope
//   console.log("print b ---", b);
// }

// b = 5;
// abc();

// Example 2

// global scope

// scope chain
// b = 7;
function abc() {
  // parent scope
  function c() {
    // local scope
    console.log("print b ---", b);
  }
  c();
}

b = 6;
abc();

// Lexical Env -> local memory + lexical Env of it's parent -> Interviewer

// A lexical Env is a DS that holds identifier-variable mapping
// identifer refers to the name of variable/func and
// varible reference to the actual object[including func, obj, primitive values]
// LexicalEnv = {
//     Identifier: <value>,
//     Identifier: <Function Obj>
// }

// 3 scopes
// Global Scope -> variables declared outside any function or block
a = 6;
// Local Scope(Function scope) ->
// 1. Block Scope -> variables declared with let and const inside a block
{
  let i = 50;
  let j = 20;
}
// console.log(i);
// 2. Function Scope -> variables declared inside a function have local scope
function foo() {
  var k = 100;
}
console.log(k);
