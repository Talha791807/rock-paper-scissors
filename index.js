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
    playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
    const winningScenario = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerSelection === computerSelection) {
        displayResult("It's a Tie");
    } else if (winningScenario[playerSelection] === computerSelection) {
        playerScore++;
        displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    updateScoreboard();
    checkWinner();
}
