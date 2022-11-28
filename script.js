let playerScore = 0;
let computerScore = 0;

/* function getComputerChoice() {
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
    if (choice !== 'rock' || choice === 'paper' || choice === 'scissors') {
        confirm("Sorry, not a valid choice. Please type Rock, Paper, or Scissors! (not case sensitive)");
    } else {
        return choice;
    } 
}; */

function game() {

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    /*function getPlayerChoice() {
        let choice = prompt("Choose Rock, Paper or Scissors");
        choice = choice.toLowerCase();
        return choice;
        /* if (choice !== 'rock' || choice === 'paper' || choice === 'scissors') {
            confirm("Sorry, not a valid choice. Please type Rock, Paper, or Scissors! (not case sensitive)");
        } else {
            return choice;
        } 
    }; */

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

    function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore ++;
            return "You Lose, the computer chose paper";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore ++;
            return "You Win! The computer chose Scissors";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore ++;
            return "You Win! The computer chose Rock";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore ++;
            return "You Lose, the computer chose Scissors";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore ++;
            return "You Win! the computer chose Paper";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore ++;
            return "You Lose, the computer chose Rock";
        }
    }

if (computerScore == 5) {
    return "YOU LOSE THE BATTLE";
} else if (playerScore == 5) {
    return "YOU WIN THE BATTLE"
} else {
    playRound(playerSelection, computerSelection);
}

console.log(computerSelection);
console.log("your score is " + playerScore);
console.log("Computer score is " + computerScore);

}



game();