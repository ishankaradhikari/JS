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



