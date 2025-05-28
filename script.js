let buttons = document.querySelectorAll("button");
let statusDiv = document.getElementById("status");
let scoreDiv = document.getElementById("score");
let winnerDiv = document.getElementById("winner");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed >= maxRounds) return;

    let playerChoice = button.value;
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    roundsPlayed++;

    statusDiv.textContent = result.message;
    scoreDiv.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;

    if (roundsPlayed === maxRounds) {
      declareWinner();
    }
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) {
    return { message: `It's a tie! You both chose ${player}.` };
  }

  const win =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");

  if (win) {
    playerScore++;
    return { message: `You win! ${player} beats ${computer}.` };
  } else {
    computerScore++;
    return { message: `You lose! ${computer} beats ${player}.` };
  }
}

function declareWinner() {
  if (playerScore > computerScore) {
    winnerDiv.textContent = "🎉 You are the overall winner!";
    winnerDiv.style.color = "green";
  } else if (computerScore > playerScore) {
    winnerDiv.textContent = "💻 Computer wins the game!";
    winnerDiv.style.color = "red";
  } else {
    winnerDiv.textContent = "🤝 It's a draw!";
    winnerDiv.style.color = "orange";
  }
}
