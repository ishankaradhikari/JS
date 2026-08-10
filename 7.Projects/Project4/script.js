const randomNum = parseInt((Math.random() * 100) + 1)

const input = document.querySelector('.guessField')
const submit = document.querySelector('.submitGuess')

const prev = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')


// console.log(`${prev} ${remain}`)

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const num = parseInt(document.querySelector('.guessField').value)

    if (num != randomNum){
        document.querySelector('.guesses').innerHTML = `you gussed ${num} but the number was ${randomNum}`
        
    } else{
        document.querySelector('.guesses').innerHTML = `You guessed the correct number ${randomNum}`
    }

})