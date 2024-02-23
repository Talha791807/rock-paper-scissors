let playerScore = 0;
let computerScore = 0;

function displayResult(result) {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = result;
}

function updateScoreboard() {
    document.getElementById('scoreboard').innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore >= 5) {
        announceWinner("Player");
    } else if (computerScore >= 5) {
        announceWinner("Computer");
    }
}

function announceWinner(winner) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.innerHTML = `${winner} Wins the Game!`;
    resetGame();
    
    window.setTimeout(() => {
        window.alert(`You ${winner === "Player" ? "Win" : "Lose"} the game!`);
    }, 100);
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
    displayResult('');
    const winnerDiv = document.getElementById('winner');
    winnerDiv.innerHTML = '';
}
document.getElementById('rock').addEventListener('click', function() {
    const playerSelection = 'rock';
    playRound(playerSelection, getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
    const playerSelection = 'paper';
    playRound(playerSelection, getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function() {
    const playerSelection = 'scissors';
    playRound(playerSelection, getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const winningScenario = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerSelection === computerSelection.toLowerCase()) {
        displayResult("It's a Tie");
    } else if (winningScenario[computerSelection.toLowerCase()] === playerSelection) {
        playerScore++;
        displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    updateScoreboard();
    checkWinner();
}
