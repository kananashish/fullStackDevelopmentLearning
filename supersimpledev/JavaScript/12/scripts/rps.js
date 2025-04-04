let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();



function pickRandomMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    let result = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}

let isAutoPlaying = false;
let intervalId;

function autoplay() {
    if(!isAutoPlaying) {
        isAutoPlaying = true;
        intervalId = setInterval(() => {
            const playerMove = pickRandomMove();
            playGame(playerMove);
        }, 2000);
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r') {
        playGame('rock');
    }
    else if(event.key === 'p') {
        playGame('paper');
    }
    else if(event.key === 's') {
        playGame('scissors');
    }
});
function playGame(playerMove) {

    const computerMove = pickRandomMove();

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You lose.';
        }
        else {
            result = 'You win.';
        }
    }

    else if (playerMove === 'paper') {    
        if (computerMove === 'rock') {
            result = 'You win.';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else {
            result = 'You lose.';
        }
    }

    else {
        if (computerMove === 'rock') {
            result = 'You lose.';
        }
        else if (computerMove === 'paper') {
            result = 'You win.';
        }
        else {
            result = 'Tie.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else {
        score.ties += 1;
    }

    //storing the score in local storage
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
Computer`;
    
//             alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);


}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}