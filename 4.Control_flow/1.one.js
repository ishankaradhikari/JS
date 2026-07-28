// if
const isUserLoggedIn = true
const temperature = 50

// if (temperature < 40){
//     console.log('temperature is less than 40')
// } else {
//     console.log("temperature is greater than 40")
// }
// <, >, <=, >=, ==, !=, ===, !== //logical operators, comparision operators


const score = 200

if(score > 100){
    let power = "fly"
    // console.log(`User power ${power}`);
}


// console.log(`User power ${power}`); //Error power is not defined. local variable


//--------shorthand notation----------
const balance = 1000
// if(balance > 500) console.log("test")


// if(balance > 500) console.log("test"),
// console.log('test 2'); // not recommended,, not readable


if(balance < 500){
    // console.log("less than 500");   
} else if(balance < 750){
    // console.log('less than 750');
} else if(balance < 900){
    // console.log('less than 900');
} else{
    // console.log('less than 1200');
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log('allowed to buy');
}


if(loggedInFromEmail || loggedInFromGoogle){
    console.log('logged in');
}



