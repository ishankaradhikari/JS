const userEmail = []

if(userEmail){
    // console.log('got user email');
    
} else{
    // console.log("don't have user email");
}


// ---------falsy values-----------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// -------------Truthy values-------------
// "0", 'false', " ", [], {}, function(){}



// if (userEmail.length === 0){
//     console.log("Array is empty");
    
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log('object is empty');
}


// Nullish Coalescing Operator (??)


let val1;

// val1 = 15 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);



// -----------Terniary Operator--------------

// conditoin ? true : false

const iceCream = 100
// iceCream <= 80 ? console.log('less than 80') : console.log('more than 80');



