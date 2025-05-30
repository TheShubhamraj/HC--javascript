// console.log(parseInt(Math.random()*100+1));
let randomNo = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if (playGame) {
    submit.addEventListener('click',function(e){
       e.preventDefault();
      const guess= parseInt(userInput.value );
       console.log(guess)
       validateGuess(guess);
    })
}


function validateGuess(guess){
    //
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if (guess <1){
        alert("Please enter a valid message")
    }else if (guess > 100) {
        alert("Please enter a no. less than 100 ")
    }else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNo}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    //
    if (guess === randomNo) {
        displayMessage(`you guessed it right`)
        endGame()
    }else if (guess < randomNo) {
        displayMessage(`you guess lower value `)
    }else if (guess > randomNo) {
        displayMessage(`you guessed a  greater value`)
    }
}
function displayGuess(guess){
    //
    userInput.value = ``
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    //
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    //
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNo = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess =1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame = true
    })
}

function endGame(){
    //
    userInput.value = ``
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id ="newGame">Start new Game</h2>'
    startover.appendChild(p)
    playGame = false;
    newGame();
}



