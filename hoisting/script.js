// Hoisting

// 1. Function Hoisting
// JavaScript hoists function declarations, so you can call a function before it's defined in the code.

console.log(myFunction());

function myFunction() {
  return "Hello Pavan"; // In this case, the function myFunction is hoisted to the top of its scope, so it can be called before its declaration in the code.
}

// 2. Variable Hoisting
// Variable declarations using var are hoisted to the top, but their initialization remains in place.

console.log(myVar); // Output: undefined
myVar = "Pavan";
console.log(myVar); // Output: Pavan

// 3. Hoisting with let and const
// let and const declarations are also hoisted, but they are not initialized until their definition is evaluated. This creates a "temporal dead zone" where accessing them before their declaration results in a ReferenceError.

// Example with let:
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 20;

// Example with const:
console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 30;

// In both cases, trying to access myLetVar or myConstVar before their declarations results in a ReferenceError due to the temporal dead zone.

