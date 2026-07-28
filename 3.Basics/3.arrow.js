const user = {
    username: "shankar",
    price: 23,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);  // In Node.js, this is an empty object {} at the top level. In a browser, it refers to the global window object.


// ======================================

// function me(){
//     let username = "shankar"
//     console.log(this.username); 
// }
// me()

//=======================================


        // 'this' is NOT the local function scope.
    // It cannot access local variables like 'username'.
    // In Node.js, this.username is undefined because 'this'
    // is not the object containing the local variable.

    
//----------   // Rule to remember: ----------------
// 'this' looks for the object that called the function,
// NOT for variables declared inside the function.



// const me = function(){
//     let username = 'shankar'
//     console.log(this.username);
// }
// me()


//+++++++++++++++ Arrow Function ++++++++++++++++

const me = () => {
    let username = 'shankar'
    console.log(this.username);
}
// me()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2 // implicit return

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "shankar"}) // to return object parenthesis() must be used


console.log(addTwo(3, 5));



const myArray = [2, 3, 4, 5, 6]
// myArray.forEacn()
