function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    // Check for a tie
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    // Check for player win conditions
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`; 
    }

    // If it's not a tie and the player didn't win, then computer wins
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
}

function getRandomChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore(playerScore, computerScore) {
    document.getElementById('result').innerHTML = 
        `Score: Player ${playerScore} - ${computerScore} Computer<br>
        ${playerScore === 5 ? 'Congratulations! You win the game!' : ''}
        ${computerScore === 5 ? 'You lost the game. Better luck next time!' : ''}
        ${playerScore === 5 || computerScore === 5 ? '<button id="reset">Reset Game</button>' : ''}`;
        
        if (playerScore === 5 || computerScore === 5) {
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;

            if (playerScore === 5) {
                document.getElementById('reset').addEventListener('click', resetGame);
            }
        }
}

function resetGame() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.getElementById('reset').remove();
    document.getElementById('result').innerHTML = '';
    playerScore = 0;
    computerScore = 0;
}

document.getElementById('rock').addEventListener('click', function() {
    playGame("Rock");
});

document.getElementById('paper').addEventListener('click', function() {
    playGame("Paper");
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame("Scissors");
});

let playerScore = 0;
let computerScore = 0;

function playGame(playerSelection) {
    const computerSelection = getRandomChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    updateScore(playerScore, computerScore);
}