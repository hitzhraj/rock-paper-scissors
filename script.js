const display = document.getElementById('section-1');
const display2 = document.getElementById('section-2');
let userScore = 0;
let compScore = 0;
let totalMoves = 10;

//computer selection function

// const getComputerChoice = () => {
    
//     let choiceOfC = Math.floor(Math.random() * 3)
//     if (choiceOfC === 0) {
//         para2.textContent = "The computer chose ROCK";
//         display.appendChild(para2);
//     } else if (choiceOfC === 1) {
        // para2.textContent = "The computer chose PAPER";
        // display.appendChild(para2);
//     } else {
//         para2.textContent = "The computer chose SCISSORS";
//         display.appendChild(para2);
//     }
// }

const game = document.createElement('p');
game.style.fontSize = '20px';
game.style.fontFamily = 'monospace';
game.style.fontWeight = '600';

const para2 = document.createElement('p');
para2.style.fontSize = '20px';
para2.style.fontFamily = 'monospace';
para2.style.fontWeight = '600';

const para = document.createElement('p');
para.style.fontSize = '20px';
para.style.fontFamily = 'monospace';
para.style.fontWeight = '600';

const moves = document.createElement('p');
moves.style.fontSize = '20px';
moves.style.fontFamily = 'monospace';
moves.style.fontWeight = '600';

const score = document.createElement('p');
score.style.fontSize = '20px';
score.style.fontFamily = 'monospace';
score.style.fontWeight = '600';

const gameOver = document.createElement('p');
gameOver.style.fontSize = '45px';
gameOver.style.fontFamily = 'monospace';
gameOver.style.fontWeight = '600';

const winner = document.createElement('p');
winner.style.fontSize = '50px';
winner.style.fontFamily = 'times new roman';
winner.style.fontWeight = '600';

const reload = document.createElement('p');
reload.style.fontSize = '30px';
reload.style.fontFamily = 'monospace';
reload.style.fontWeight = '600';

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let choiceOfC = Math.floor(Math.random() * 3);
            if (btn.innerHTML === "Rock" && choiceOfC === 0) {
                para.textContent = "The user selected ROCK";
                display.appendChild(para);
                para2.textContent = "The computer selected ROCK";
                display.appendChild(para2);
                game.textContent = "Its a tie!";
                display.appendChild(game);

                // getComputerChoice();

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);
                
                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }
//beware start
            } else if (btn.innerHTML === "Rock" && choiceOfC === 1) {
                para.textContent = "The user selected ROCK";
                display.appendChild(para);
                para2.textContent = "The computer selected PAPER";
                display.appendChild(para2);
                game.textContent = "Computer wins!";
                display.appendChild(game);

                compScore++;
                // cScore.textContent = `${compScore}`;
                // uList.appendChild(cScore);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }

            } else if (btn.innerHTML === "Rock" && choiceOfC === 2) {
                para.textContent = "The user selected ROCK";
                display.appendChild(para);
                para2.textContent = "The computer selected SCISSORS";
                display.appendChild(para2);
                game.textContent = "User wins!";
                display.appendChild(game);

                userScore++;
                // uScore.textContent = `${userScore}`;
                // uList.appendChild(uScore);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }

            } else if (btn.innerHTML === "Paper" && choiceOfC === 0) {
                para.textContent = "The user selected PAPER";
                display.appendChild(para);
                para2.textContent = "The computer selected ROCK";
                display.appendChild(para2);
                game.textContent = "User wins!";
                display.appendChild(game);

                userScore++;
                // uScore.textContent = `${userScore}`;
                // uList.appendChild(uScore);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }
            } else if (btn.innerHTML === "Paper" && choiceOfC === 1) {
                para.textContent = "The user selected PAPER";
                display.appendChild(para);
                para2.textContent = "The computer selected PAPER";
                display.appendChild(para2);
                game.textContent = "Its a tie!";
                display.appendChild(game);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }
            } else if (btn.innerHTML === "Paper" && choiceOfC === 2) {
                para.textContent = "The user selected PAPER";
                display.appendChild(para);
                para2.textContent = "The computer selected SCISSORS";
                display.appendChild(para2);
                game.textContent = "Computer wins!";
                display.appendChild(game);

                compScore++;
                // cScore.textContent = `${compScore}`;
                // uList.appendChild(cScore);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }
            } else if (btn.innerHTML === "Scissors" && choiceOfC === 0) {
                para.textContent = "The user selected SCISSORS";
                display.appendChild(para);
                para2.textContent = "The computer selected ROCK";
                display.appendChild(para2);
                game.textContent = "Computer wins!";
                display.appendChild(game);

                compScore++;
                // cScore.textContent = `${compScore}`;
                // uList.appendChild(cScore);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }
            } else if (btn.innerHTML === "Scissors" && choiceOfC === 1) {
                para.textContent = "The user selected SCISSORS";
                display.appendChild(para);
                para2.textContent = "The computer selected PAPER";
                display.appendChild(para2);
                game.textContent = "User wins!";
                display.appendChild(game);

                userScore++;
                // uScore.textContent = `${userScore}`;
                // uList.appendChild(uScore);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);

                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }

            } else if (btn.innerHTML === "Scissors" && choiceOfC === 2) {
                para.textContent = "The user selected SCISSORS";
                display.appendChild(para);
                para2.textContent = "The computer selected SCISSORS";
                display.appendChild(para2);
                game.textContent = "Its a tie!";
                display.appendChild(game);

                score.textContent = `User score ${userScore} : ${compScore} Computer score`;
                display2.appendChild(score);
                
                totalMoves--;
                if (totalMoves <= 0) {
                    gameOver.textContent = "Game over";
                    display.appendChild(gameOver);
                    if (userScore === compScore) {
                        winner.textContent = "Its a draw";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else if (userScore > compScore) {
                        winner.textContent = "The user wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    } else {
                        winner.textContent = "The computer wins!";
                        display.appendChild(winner);
                        reload.textContent = "(reload the window to start a new game)";
                        display2.appendChild(reload);
                    }
                    userScore = 0;
                    compScore = 0;
                } else {
                    moves.textContent = `No of moves left ${totalMoves}`;
                    display.appendChild(moves);
                }
            }
        })
    }
)