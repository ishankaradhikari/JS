// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
        
}


const name = 'shankar adhikari'

for (const n of name) {

    // if (n == ' ') {
    //     continue   
    // }

    // console.log(`each characters are ${n}`);
        
}

// Maps

const map = new Map()
map.set('NP', 'Nepal')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('NP', 'Nepal') // duplicate entry, map stores unique values and remembers the order as well

// console.log(map);

for (const[ key, value] of map) {
    // console.log(key, ' :- ', value );
    
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const key of myObj) {
//     console.log(key);
    
// }





