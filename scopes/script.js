// Global scope

varglobalVar = "I'm a global variable"

function printGlobalVar() {
    console.log(varglobalVar); // Accessible here
}

printGlobalVar(); // Output: "I'm a global variable"
console.log(varglobalVar); // Output: "I'm a global variable"

// Function scope

function myFunction() {
    var localVar = "I'm a local variable"
    console.log(localVar) // Accessible here
}

myFunction(); // Output: "I'm a local variable"
// console.log(localVar); // Error: localVar is not defined 

// Block scope

function blockScopeExample() {
    if (true) {
        let blockVar = "I'm a block-scoped variable";
        console.log(blockVar); // Accessible here
    }

    // console.log(blockVar); // Error: blockVar is not defined
}

blockScopeExample();