// const stone = document.getElementById('stone');
// const scissors = document.getElementById('Scissors');
// const paper = document.getElementById('paper');
const userScore = document.getElementById('you');
const compScore = document.getElementById('comp');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const userMoves = document.querySelectorAll('.gameBtn');


userMoves.forEach((button) => {
    button.addEventListener('click' , (e)=> {
    const userMove = e.target.id;
    const compMove = computerMove();
    let ans = "";
    // handling tie case
    if(userMove === compMove) ans = 'tie';
    // when user moves stone
    else if(userMove == 'stone') {
    ans = (userMove == 'stone' && compMove == 'scissors')?"won":"loose";
    ans = (userMove == 'stone' && compMove == 'paper')?"loose":"won";
    } // when user moves scissors
    else if(userMove == 'scissors') {
    ans = (userMove == 'scissors' && compMove == 'paper')?"won":"loose";
    ans = (userMove == 'scissors' && compMove == 'stone')?"loose":"won";
    } // when user moves paper
    else {
    ans = (userMove == 'paper' && compMove == 'stone')?"won":"loose";
    ans = (userMove == 'paper' && compMove == 'scissors')?"loose":"won";
    }
    if(ans == 'tie') result.innerText = `Game Tie`;
    else if(ans == 'won') {
    result.innerText = 'Congratulations You Won';
    userScore.innerText = (Number(userScore.innerText) + 1);
    }
    else {
    result.innerText = `You loose better luck next time`;
    compScore.innerText = (Number(compScore.innerText) + 1);
    }
    } , false)
})

//reset game
resetBtn.addEventListener('click' , ()=> {
result.innerText = "";
userScore.innerText = "";
compScore.innerText = "";
} , false)



function computerMove() {
const min = 1;
const max = 4;
let value = Math.floor((Math.random() * (max-min)) + min);
if(value == 1) return "stone";
else if(value == 2) return "scissors";
else return "paper";
}


