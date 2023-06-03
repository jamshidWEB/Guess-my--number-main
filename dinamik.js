'use strict';
let number = document.querySelector('.number');
let inp = document.querySelector('.guess');
let again = document.querySelector('.again');
let check = document.querySelector('.check');
let massage = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let hightscoreel = document.querySelector('.highscore');
const body = document.querySelector('body')
let hidden = document.querySelector('.hidden')

inp.focus()

let gameOver = true;
let hightscore = 0;
let score = 20;

let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber)
check.addEventListener('click', () => {
    inp.focus()
    asad()
})
again.addEventListener('click', againGame);

function againGame() {
    score = 20;
    scoreEl.textContent = score
    gameOver = true;
    number.textContent = '?'
    massage.textContent = 'Start Guessing.... '
    body.style.background = '#222'
    randomNumber = Math.floor(Math.random() * 20 + 1);
    console.log(randomNumber)
}
function asad() {
    inp.focus()

    let inputValue = inp.value
    if (score < 1) {
        hidden.classList.toggle('.hidden')
    } else {
        if (inp.value && (inputValue > 0) && gameOver) {
            score--
            scoreEl.textContent = score
            if (score == 0) {
                massage.textContent = 'Game Over'
                gameOver = false;
                body.style.background = 'crimson'
                hidden.style.display = 'block'
            }
            else {
                if (inputValue == randomNumber) {
                    score++
                    scoreEl.textContent = score
                    massage.textContent = 'You are win'
                    body.style.background = '#60b347'
                    number.textContent = randomNumber
                    hidden.style.display = 'block'
                    hidden.classList.add('.hidden')
                    if (score > hightscore) {
                        hightscore = score
                    }
                    hightscoreel.textContent = hightscore

                    gameOver = false
                } else if (inputValue > randomNumber) {
                    massage.textContent = 'to hight'
                    hightscore - score
                    hightscoreel.textContent = hightscore
                } else if (inputValue < randomNumber) {
                    massage.textContent = 'to low'
                    hightscore - score
                    hightscoreel.textContent = hightscore
                }
            }
        } else {
            massage.textContent = ' NO NUMBER !'
        }
    }

    inp.focus()
    inp.value = ""


}