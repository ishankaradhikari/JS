const marvel = ['thor', 'spiderman', 'ironman']
const dc = ['batman', 'superman', 'joker']

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

// const m1 = marvel.concat(dc)
// console.log(m1)

const allHeros = [...marvel, ...dc] //spread operator
console.log(allHeros)

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]]
const arr2 = arr1.flat(Infinity)
// console.log(arr2)

// console.log(Array.isArray("Shankar"))
// console.log(Array.from("Shankar"))
// console.log(Array.from({name: 'shankar'}))

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))

