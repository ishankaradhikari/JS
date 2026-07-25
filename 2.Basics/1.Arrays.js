// Array
const myArr = [0, 1, 2, 3, 4, 5]
const names = ['john', 'bob', 'alice', 'robert', 'jaime', 'syam']

let myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(myArr[1])



    // Mutating method      Non-mutating alternative

    // copyWithin() 	    No one-method alternative
    // fill() 	            No one-method alternative
    // pop() 	            slice(0, -1)
    // push(v1, v2) 	    concat([v1, v2])
    // reverse() 	        toReversed()
    // shift() 	            slice(1)
    // sort() 	            toSorted()
    // splice() 	        toSpliced()
    // unshift(v1, v2)  	toSpliced(0, 0, v1, v2)



// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(5) //Adds element to first position of array
// myArr.shift() //Removes element from first position of array


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const myArr3 = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr3)
// console.log(myArr)


// Slice and Splice

// console.log("A - ", myArr)
// const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B - ",myArr )


// const myn2 = myArr.splice(1, 3)// Manupulates the original array
// console.log("C -  ",myArr )
// console.log(myn2)


