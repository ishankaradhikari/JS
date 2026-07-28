// Immediately Invoked Function Expressions (IIFE)


// to avoid the pollution form global scope. if we do not want the global variables
(function one(){
    console.log(`DB connected`)
}) ();


// Always end an IIFE with a semicolon (;).
// Otherwise, if another line starts with (, JavaScript may treat it
// as a continuation of the previous IIFE and throw:
// TypeError: (intermediate value)(...) is not a function.


(function two (){
    //named iife
    console.log(`Hello`)
})();


(three = (name) =>{
    // unnamed iife
    console.log(`hello hello ${name}`)
} )('shankar');





// ++++++++++ JavaScript Execution Context ++++++++++

let val1 = 10
let val2 = 20

const addNum = function(num1, num2){
    let result = num1 + num2
    return result
}
let result2 = addNum(val1, val2)
let result1 = addNum(5,10)



// JavaScript runs code in two phases:

// 1. Global Execution Context (GEC)
//    -> Created first.
//    -> 'this' is initialized.
//    -> In browsers, 'this' refers to the window object.
//    -> In Node.js, 'this' refers to the module object (not window).

// 2. Memory Creation Phase (Memory Allocation)
//    -> Memory is allocated for variables and functions.
//    -> Variables declared with 'var' are initialized as undefined.
//    -> Variables declared with 'let' and 'const' exist but remain in the
//       Temporal Dead Zone (TDZ) until their declaration is executed.
//    -> Function declarations are stored completely in memory.

// 3. Execution Phase
//    -> Code runs line by line.
//    -> Variables receive their actual values.
//    -> Functions are executed when called.