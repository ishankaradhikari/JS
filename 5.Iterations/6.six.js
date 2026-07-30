const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const values = coding.forEach( (item) => {
    // console.log(item);
    return item // must write return explicitely to return values to the variable
    
})

// console.log(values);



// const value = myNum.filter( (item) =>  item > 4)


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = myNum.filter( (item) => {
    return item > 4
})

// console.log(value);


const newNum = []

myNum.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})

// console.log(newNum);

// Completed books data
const books = [
    { title: 'Book One', edition: 2004, genre: 'Fiction', publish: 2014 },
    { title: 'Book Two', edition: 2008, genre: 'Non-Fiction', publish: 1996 },
    { title: 'Book Three', edition: 2007, genre: 'History', publish: 1981 },
    { title: 'Book Four', edition: 2010, genre: 'Non-Fiction', publish: 1992 },
    { title: 'Book Five', edition: 2014, genre: 'Science', publish: 1999 },
    { title: 'Book Six', edition: 2010, genre: 'Fiction', publish: 1987 },
    { title: 'Book Seven', edition: 1996, genre: 'History', publish: 1986 },
    { title: 'Book Eight', edition: 1998, genre: 'Science', publish: 2009 }
]

// console.table(books)


// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'History'
// })

const userBooks = books.filter( (bk) => bk.publish >= 1999)
console.log(userBooks)










