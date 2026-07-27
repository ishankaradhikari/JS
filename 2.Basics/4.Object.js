//Previous practice


// let person = {
//     greet(){
//         console.log(`Hello ${user.fname} ${user.lname}, welcome to our site.`)
//     }
// }

// let user = Object(person)
// user.fname = "Shankar"
// user.lname = "Adhikari"
// user.greet()



// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = '123'
tinderUser.name = 'sam'
tinderUser.isLoggedIn = false

// console.log(tinderUser)


//Object inside object can be created, Nested Object
const regularUser = {
    email: 'right@gmail.com',
    fullname: {
        fname: 'shankar',
        lname: 'Adhikari'
    }
}

// console.log(regularUser.fullname.fname) //accessing property inside a nested objects
// console.log(regularUser.fullname?.fname) // Optional chaining (?.): if 'fullname' doesn't exist, it returns undefined instead of throwing an error.


const obj1 = { 1: 'a', 2: 'b' }

const obj2 = {
    3: 'a',
    4: 'b'
}

const obj3 = {
    5: 'a',
    6: 'b'
}

// const obj3 = { obj1 ,  obj2}
// const obj3 = Object.assign(obj1, obj2) // Create a new object and merge obj1, obj2, and obj3 into it.
// const obj4 = Object.assign({}, obj1, obj2, obj3) // Using {} as the first argument prevents the original objects from being modified. {} asts as destination


const obj4 = {... obj1, ...obj2, ...obj3} //spread operator, same as merging arrays
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "shankar@gmail.com"
    },
    {
        id: 2,
        email: "shankar@gmail.com"
    },
]
// console.log(users[0])


// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedin'));



//Destructuring


const course = {
    courseName: "js",
    price: 999,
    courseInstructor: "aaa"
}

// console.log(course.courseInstructor);

const {courseInstructor : ci} = course

console.log(ci);




//---------------------APIs-------------------


//-------------JSON---------------
// {
//     "name" : 'shankar', // keys are also inside inverted comma
//     "coursename" : 'js',
//     "price": 'free'

// }


[
    {},
    {},
    {}
]



