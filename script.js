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
    /* if (choice !== 'rock' || choice === 'paper' || choice === 'scissors') {
        confirm("Sorry, not a valid choice. Please type Rock, Paper, or Scissors! (not case sensitive)");
    } else {
        return choice;
    } */
};

let playerSelection = getPlayerChoice(); 

console.log(playerSelection);

let computerSelection = getComputerChoice();
console.log(computerSelection); 


function playRound (getPlayerChoice, getComputerChoice) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose, the computer chose paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! The computer chose Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! The computer chose Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose, the computer chose Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! the computer chose Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose, the computer chose Rock";
    }
} 

let result = playRound();

console.log(result);