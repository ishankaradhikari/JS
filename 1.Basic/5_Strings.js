let name = "shankar"
// console.log(name + " Adhikari")

const repoCount = 10

// console.log(name + repoCount ) // outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`) // Mordern and easy to read

const game = new String("shankar-Adhikari") // declaring string
// console.log(game)
// console.log(typeof game)


// console.log(game)

// String Methods


// console.log(game[0])
// console.log(game.__proto__)

// console.log(game.length)
// console.log(game.charAt(5))
// console.log(game.toUpperCase())
// console.log(game.indexOf('a'))


const newGame = game.substring(0, 4)
console.log(newGame)





// slice(): Negative index counts from the END.
// Formula: actualIndex = string.length + negativeIndex
// Example: length = 17, -4 => 17 + (-4) = 13
// slice(-4, 0) => slice(13, 0) => "" (because start > end, slice DOES NOT swap indexes)


// const anotherString = game.slice(-10, 17)
// console.log(anotherString)

// const newString = "       Shankar       "
// console.log(newString.trim())
// console.log(newString)



// Not working
const url = "https://shakar.com/shankar%20adhikari"
url.replace('%20','-')
console.log(url) // strings are immutable, here i'm creating a new string instead of modifying the 'url


// corrected

const url1 = "https://shakar.com/shankar%20adhikari"
console.log(url1.replace('%20', '-')) // relpace() creates and returns a new string(a copy with the change), the original 'url' remains unchanged

console.log(url.includes('shankar'))

console.log(game.split('a'))
