
const randomNo = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const remaining  = document.querySelector(".lastResult");
const lowOrHi  = document.querySelector(".lowOrHi");
const resultParas  = document.querySelector(".resultParas");


const p = document.createElement('p')

let prevguess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}



function validateGuess(guess){

    if(isNaN(guess)){
        alert("please enter a valid no")
    }else if(guess < 1){
        alert("please enter a no greter than 1")
    }else if(guess > 100){
        alert("please enter a no less than 100")
    }
    else{
       prevguess.push(guess);
       if(numGuess === 11){
          displayGuess(guess);
          displayMessage(`Game Over .Random no was ${guess}`)
          endGame();
       }
       else{
          displayGuess(guess);
          checkGuess(guess);
       }
    }

}

function checkGuess(guess){

    if(guess === randomNo){
        displayMessage(`Your guess is Right: ${guess} `)
    }else  if(guess < randomNo){
        displayMessage(`NO is too low: ${guess} `)
        
    }else if(guess > randomNo){
        displayMessage(`NO is too hight: ${guess} `)
        
   }

}


function displayGuess(guess){
    userInput.value = ''; 
    guesses.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`
    resultParas.appendChild(p)
    playGame = false;
    newGame();

}

function newGame(){
   const newBtn = document.querySelector("#newGame")

   newBtn.addEventListener('click' , function(e) {

    randomNo = Math.floor(Math.random() * 100 + 1)
    prevguess = []
    numGuess = 1
    guesses.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    resultParas.removeChild(p)
    playGame = true;
   })
}






