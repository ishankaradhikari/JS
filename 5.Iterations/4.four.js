const myObj = {
    js :'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} is the shortcut for ${myObj[key]}`);    
}

const programming = ['js', 'python', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
    
    
}


const map = new Map()
map.set('NP', 'Nepal')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('NP', 'Nepal')

for (const key in map) {
   console.log(key);
}



