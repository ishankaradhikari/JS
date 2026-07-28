function sayMyName() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("0");    
}

// sayMyName        // reference
// sayMyName()      //execution

// sayMyName()

// function addTwonumbers(number1, number2){ // parameters during funcion decleration
//     console.log(number1 + number2)
// }


function addTwonumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
    
    return number1 + number2

    // console.log("shankar"); unreachable code,  nothing executes after return
    
}
const result = addTwonumbers(5, 7) // arguments during function invocation
// console.log("Result: ", result);

function loginUserMessage(username = "user"){
    if( username === undefined){
        // console.log("Please enter your name.");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Shankar"))

// console.log(loginUserMessage("Shankar"));

function calculateCartPrice(...num1){ // rest operator
    return num1
}

// console.log(calculateCartPrice(10, 15, 20))

const user = {
    username : "shankar",
    price: 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "Shankar",
    price: 99
})

    