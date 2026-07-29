// for loop

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 5){
        // console.log("5 is the current number");        
    }
    // console.log(element);

}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop values ${j} and inner loop ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i * j)
        
        
    }
    
}

let myArray = ['ironman', 'thor', 'hulk', 'drstrange', 'spidy']
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); 
}


// break and continue

for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log("Detected null");
        // break
        continue 
    }

    console.log(`value of i is ${index}`);
}


let arr = [1, 2, null, 3, 4, null, 5]
for (let index = 0; index < arr.length; index++) {

    if (arr[index] == null) {
        // console.log("Detected null");
        // break
        continue 
    }

    // console.log(`value of i is `, arr[index]);
}



