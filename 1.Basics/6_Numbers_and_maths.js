const score = 100

const balance = new Number(200)

// console.log(score)
// console.log(balance)

// console.log(typeof balance.toString())
// console.log(balance.toString().length) // Once converted to string we can use the string methods

// console.log(balance.toFixed(2))

const anotherNumber = 123.84343
// console.log(anotherNumber.toPrecision(4))

const num = 1000000
// console.log(num.toLocaleString())

// console.log(Number.MAX_SAFE_INTEGER)


//-----------------Maths----------------


console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.1))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))

// console.log(Math.sqrt(46))
// console.log(Math.pow(3, 2))
// console.log(Math.min(3, 2))
// console.log(Math.max(3, 5, 7, 2))

// console.log(Math.random()) // random generates values between 0 and 1
// console.log(Math.trunc(Math.random() * 10 )+ 1 ) 
// console.log(Math.floor( Math.random() * 10 ))
// trunc truncates the fraction portion and results a decimal number, floor(), ceil() can also be used

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))
