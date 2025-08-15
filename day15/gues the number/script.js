const game = document.querySelector('.game');
const resetButton = document.querySelector('#reset');
const attempts = document.querySelector('.attempts');
const previousAttempts = document.querySelector('.previousAttempts');
const userInput = document.querySelector('#numberInput');
attempts.innerText = '10';
let previousGuesses = [];
game.addEventListener('submit' , function(e) {
    e.preventDefault();
    const userNumber = userInput.value;
    if(userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    document.querySelector('.winner').innerHTML = 'Please Enter A Valid Number';
    }
     else if(Number(attempts.innerText) == 0) {
    document.querySelector('.winner').innerHTML = `0 attempt's left`;
    } else {
     attempts.innerText = (Number(attempts.innerText)-1);
    previousGuesses.push(Number(userNumber));
    previousAttempts.innerHTML = previousGuesses;
    const gameNumber = generateNumber();
    if(Number(userNumber) == gameNumber) {
    // winning condition
    document.querySelector('.winner').innerHTML = 'You Won';
    } else { // Losing condition
     document.querySelector('.winner').innerHTML = 'You Lost';   
    }
    }
})

resetButton.addEventListener('click' , function(e) {
    attempts.innerText = '10'; // reset
    previousGuesses = [];
    previousAttempts.innerHTML = '';
    document.querySelector('.winner').innerHTML = '';
}) 

// function to generate random number between 1 to 100.
function generateNumber() {
    const min = 1;
    const max = 100;
    const number = Math.floor((Math.random()*(max-min+1))+min);
    return number;
}
