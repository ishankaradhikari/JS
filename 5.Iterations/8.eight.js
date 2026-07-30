// reduce

// reduce is used in the cases like cart

const myNum = [1, 2, 3]


// const myTotal = myNum.reduce( function (acc, currval) {
//     console.log(`acc ${ acc }, currval  ${currval}`);
    
//     return acc + currval
// }, 0 )


const myTotal = myNum.reduce( (acc, currval) => {
    return acc + currval
}, 0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price : 2000
    },
    {
        itemName: 'java',
        price : 3000
    },
    {
        itemName: 'python',
        price : 2100
    },
    {
        itemName: 'mobile course',
        price : 5000
    },
    {
        itemName: 'data science',
        price : 15000
    }
]

const cartPrice = shoppingCart.reduce( ( acc, item ) => {
    return acc + item.price
}, 0)

// console.log(cartPrice);


