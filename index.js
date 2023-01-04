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

const rps = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        return 'Its a tie!'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'The computer wins!'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'The user wins!'
    }

    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        return 'Its a tie!'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'The user wins!'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'The computer wins!'
    }

    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        return 'Its a tie!'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'The computer wins!'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'The user wins!'
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
// console.log(rps(playerSelection, computerSelection));