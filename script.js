// click choice button to start round (bottom of page now) ++
// get computers choice ++
// compare the choices and determine winner or draw ++
// update scores ++
// update HTML ++
// check if score limit is reached, otherwise keep playing
// if limit reached, end game and update HTML

let playerScore = 0;
let compScore = 0;
let playerChoice = "";
const roundResult = document.querySelector('#result');
const gameOver = document.querySelector('#final');
const playerScoreDisplay = document.querySelector('#playerScore');
const compScoreDisplay = document.querySelector('#compScore');

// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');

// create selection buttons

function createButtons() {
    const rock = document.createElement('button');
    choiceBtns.appendChild(rock);
    rock.setAttribute('id', 'rock');
    rock.textContent = 'Rock';
    const paper = document.createElement('button');
    choiceBtns.appendChild(paper);
    paper.setAttribute('id', 'paper');
    paper.textContent = 'Paper';
    const scissors = document.createElement('button');
    choiceBtns.appendChild(scissors);
    scissors.setAttribute('id', 'scissors');
    scissors.textContent = 'Scissors';
}

createButtons();

// get computer choice 

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    } else {
        return "error";
    }
};

// FUNCTION CREATED FOR CONSOLE.LOG GAMEPLAY. LEFT HERE FOR REFERENCE

// function getPlayerChoice() {
//     let choice = prompt("Choose Rock, Paper or Scissors");
//     choice = choice.toLowerCase();
//     return choice;
// };


// compare choices and determine winner or draw

function playRound(playerSelection, computerSelection) {

    console.log("You chose " + playerSelection);
    console.log("The computer chose " + computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore ++; // update scores
        return "You Lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++;
        return "You Win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore ++;
        return "You Win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore ++;
        return "You Lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        return "You Win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore ++;
        return "You Lose";
    }
};

//Update HTML

function updateUI() {
    playerScoreDisplay.innerHTML = playerScore;
    compScoreDisplay.innerHTML = compScore;
};

// FUCTIONS CREATED FOR CONSOLE.LOG GAMEPLAY. LEFT HERE FOR REFERENCE

// function game() {

//     while (playerScore < 5 && compScore < 5) {
//         console.log(playRound(getPlayerChoice(), getComputerChoice()));
//         console.log("Your score is " + playerScore);
//         console.log("The computer's score is " + compScore);

//         if (compScore === 5) {
//             return console.log("YOU LOSE THE BATTLE!!!");
//         } else if (playerScore === 5) {
//             return console.log("YOU WIN THE BATTLE!!!");
//         }
//     }
// };

//game();

function startOverRequest() {
    rock.remove();
    paper.remove();
    scissors.remove();
    const startOver = document.createElement('button');
    choiceBtns.appendChild(startOver);
    startOver.setAttribute('id', 'startOver');
    startOver.textContent = 'Start Over';
    startOver.addEventListener('click', startOverButton);
}

function startOverButton() {
    startOver.remove();
    createButtons();
    compScore = 0;
    playerScore = 0;
    roundResult.innerHTML = '';
    gameOver.innerHTML = '';
    updateUI();
    start();
};

function gameOverCheck() {

    if (compScore === 5) {
        gameOver.innerHTML = 'YOU LOSE THE BATTLE!';
        startOverRequest();
    } else if (playerScore === 5) {
        gameOver.innerHTML = 'YOU WIN THE BATTLE!';
        startOverRequest();
    }
};

//click choice button to start round


function start() {

    rock.addEventListener('click', function(){
        playerChoice = this.id;
        roundResult.innerHTML = playRound(playerChoice, getComputerChoice());
        updateUI();
        gameOverCheck();
    });
    paper.addEventListener('click', function(){
        playerChoice = this.id;
        roundResult.innerHTML = playRound(playerChoice, getComputerChoice());
        updateUI();
        gameOverCheck();
    });
    scissors.addEventListener('click', function(){
        playerChoice = this.id;
        roundResult.innerHTML = playRound(playerChoice, getComputerChoice());
        updateUI();
        gameOverCheck();
    });
};

start();