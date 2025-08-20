const winningConditions = [
    ['one', 'five', 'nine'],
    ['three', 'five', 'seven'],
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine']
]

const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset');
const newGame = document.querySelector('.newGame');
const result = document.querySelector('.result');

let turnX = true; // true - turn of x else turn of o
boxes.forEach((box) => {
    box.addEventListener('click', (eventObj) => {
        if (turnX) {
            eventObj.target.innerText = "X";
            turnX = false; // next turn for O
        } else {
            eventObj.target.innerText = "O";
            turnX = true; // next turn for 0
        }
        eventObj.target.disabled = true;
        for (const val of winningConditions) {
            const box1 = document.getElementById(`${val[0]}`);
            const box2 = document.getElementById(`${val[1]}`);
            const box3 = document.getElementById(`${val[2]}`);
            if (box1.innerText == box2.innerText && box2.innerText == box3.innerText && box1.innerText != "" && box2.innerText != "" && box3.innerText != "") {
                result.innerText = `Congratulations Player ${box1.innerText} Won`;
            } else {
                continue;
            }
        }
    })
})

resetBtn.addEventListener('click', () => {
    reset();
})
newGame.addEventListener('click', () => {
    reset();
})

// resest to default
function reset() {
    turnX = true;
    result.innerText = "";
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
}