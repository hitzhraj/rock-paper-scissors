//function to get the computer's choice

const getComputerChoice = () => {
    let choiceOfC = Math.floor(Math.random() * 3)
    
    if (choiceOfC === 0) {
        return 'rock';
    } else if (choiceOfC === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function to play a single round of game
let userScore = 0;
let computerScore = 0;
const rps = (playerSelection, computerSelection) => {    
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose ROCK. Its a tie! \n${userScore}:${computerScore}`;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose PAPER. The computer wins! \n${userScore}:${computerScore}`;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        userScore += 1;
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose SCISSORS. The player wins! \n${userScore}:${computerScore}`;
    }

    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose PAPER. Its a tie! \n${userScore}:${computerScore}`
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        userScore += 1;
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose ROCK. The player wins! \n${userScore}:${computerScore}`
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose SCISSORS. The computer wins! \n${userScore}:${computerScore}`
    }

    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose SCISSORS. Its a tie! \n${userScore}:${computerScore}`
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose ROCK. The computer wins! \n${userScore}:${computerScore}`
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        userScore += 1;
        return `The player chose ${playerSelection.toUpperCase()} and the computer chose PAPER. The player wins! \n${userScore}:${computerScore}`
    }
}


// console.log(rps(playerSelection, computerSelection));

//The actual game function

const game = () => {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your input (rock/paper/scissors):");
        const computerSelection = getComputerChoice();
        console.log(rps(playerSelection, computerSelection));  
    }
    if (userScore > computerScore) {
        return "The player wins"
    } else if (userScore < computerScore) {
        return "The computer wins"
    } else {
        return "Its a tie!"
    }
}

game();