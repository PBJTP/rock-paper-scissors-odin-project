let playerScore = 0;
let compScore = 0;

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

function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    return choice;
};

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);
        
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore ++;
        return "You Lose, the computer chose paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++;
        return "You Win! The computer chose Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore ++;
        return "You Win! The computer chose Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore ++;
        return "You Lose, the computer chose Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        return "You Win! the computer chose Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore ++;
        return "You Lose, the computer chose Rock";
    }
};

function game() {

    while (playerScore < 5 && compScore < 5) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + compScore);

        if (compScore === 5) {
            return console.log("YOU LOSE THE BATTLE!!!");
        } else if (playerScore === 5) {
            return console.log("YOU WIN THE BATTLE!!!");
        }
    }
};

game();