// Premitive dataypes

// Call by value

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt



// const score: number = 100 // in Typescript


// const score = 100
// const scoreValue = 10.1

// const isLoggedIn = true
// const temperature = null
// let userEmail  //undefined // if left without assigning any value, it will be undefined
// let email = undefined // another way to declare undefined variable

// const id = Symbol('232')
// const anotherId = Symbol('232')
// console.log( id === anotherId)

const bigNumber = 45324546457658678967645342314n


// Non-Premitive datatypes

// call by reference

// type: Array, Object, Function


//Array
const heros = ['shankar', 'ironman', 'thor']


//Variable 
let myDetail = {
    name:"shankar",
    age: 22,
}


//Fucntion
function sum(a , b){
    console.log(a + b)
}

let a = 5 , b = 10
sum(a , b)

// Direclty store the function in a variable

let myFunc = function(){
    console.log("Knock Knock")
}
// Function Call
myFunc()


//Checking the data type of a variable
console.log(typeof bigNumber) 
console.log(typeof(heros))




// typeof Operator Results


// Type of Value    | Type of Result
// ----------------------------------
// Undefined        | undefined
// Null             | object
// Boolean          | boolean
// Number           | number
// String           | string
// Object           | object
// Function         | function
// Array            | object


// https://262.ecma-international.org/5.1/#sec-11.4.3