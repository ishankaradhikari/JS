// var num3 = 300
let num1 = 300

if (true){
    let num1 = 10
    const num2 = 20
    // console.log("Inner: ", num1);    
}



// for(let i = 0; i< array.length; i++){
//     const element = array[i]
// }





// console.log(num1)
// console.log(num2)
// console.log(num3)

//-------------nested scope-----------------

function one(){
    const username = "shankar"

    function two(){
        const website = "github"
        console.log(username)
    }
    // console.log(website)
    // two()
}
// one()

if (true){
    const username = 'shankar'

    if(username === 'shankar'){
        const website = ' github'
        // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);



// --------------- interesting----------------

console.log(addone(5)) // runs wothout error
function addone(num){
    return num + 1
}



addTwo(5)  //Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2
}




