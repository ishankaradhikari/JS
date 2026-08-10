const randomNum = parseInt((Math.random() * 100) + 1)

const input = document.querySelector('.guessField')
const submit = document.querySelector('.submitGuess')

const prev = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')
const lowHigh = document.querySelector('.lowOrHi')

let attempts = 10;
const arr = new Array()
// console.log(`${prev} ${remain}`)

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const num = parseInt(input.value)

    if (num !== randomNum){
        arr.push(num);
        prev.innerHTML = `${arr} `//but the number was ${randomNum}`
        
    }else{
        prev.innerHTML = `You guessed the correct number ${randomNum}`
    }

    attempts--
    remain.innerText = `${attempts}`

    if(num < randomNum){
        lowHigh.innerHTML = "The number is Higher"
    }else{
        lowHigh.innerHTML = "The number is lower"
    }

    if(attempts === 0){
        prev.innerHTML = ` The game is over, Number was ${randomNum}`
        submit.disabled = true;
        input.disabled = true;
    }

})