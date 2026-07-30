const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})



const myCode = [ 
    {
        language : 'js',
        file : 'javascript'
    },
    {
        language : 'java',
        file : 'java'
    },
    {
        language : 'python',
        file : 'py'
    }
]

myCode.forEach( (item) => {
    // console.log(item.file);
})

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values)


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNum = myNum.filter( (num) => {
    return num > 5
})
console.log(newNum);


