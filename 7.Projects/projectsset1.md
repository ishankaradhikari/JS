# Projects Related to DOM

## Project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## Project 1: Background color changer

```javascript

const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')


buttons.forEach( (button) => {
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        
    })
})

```


# Project 2: BMI Calculator

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span> ${bmi}</span>`
    }
    

});

```


## Project 3: Local Time

```javascript

const clock = document.querySelector('#clock')

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    clock.innerHTML = `${hour}:${min}:${sec}`
},1000);

```


## Project 4: Number Guessing Game

```javascript

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

```