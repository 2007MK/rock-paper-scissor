console.log("Hello World")

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";

    }
}

function getHumanChoice() {
    let choice = prompt("Enter your Choice (Rock, Paper or Scissors)")
    return choice;
}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
            if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    console.log("You Lose!, Computer chose paper")
                    computerScore++
                }
                else if (computerChoice === "scissors") {
                    console.log("You win! Computer chose scissors")
                    humanScore++;
                }
                else {
                    console.log("It's a Tie, you both chose rock")
                }

            }
            if (humanChoice === "paper") {
                if (computerChoice === "scissors") {
                    console.log("You Lose!, Computer chose scissors")
                    computerScore++
                }
                else if (computerChoice === "rock") {
                    console.log("You win! Computer chose rock")
                    humanScore++;
                }
                else {
                    console.log("It's a Tie, you both chose paper")
                }

            }
            if (humanChoice === "scissors") {
                if (computerChoice === "rock") {
                    console.log("You Lose!, Computer chose rock")
                    computerScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("You win! Computer chose paper")
                    humanScore++;
                }
                else {
                    console.log("It's a Tie, you both chose scissors and get 1 point each")
                }

            }
        }
    }
    decideWinner(humanScore, computerScore);
}
playGame();

function decideWinner(humanScore, computerScore) {
    console.info("Your Score :" + humanScore)
    console.info("Computer's Score :" + computerScore)
    if (computerScore > humanScore)
        console.warn("Winner is Computer")
    if (computerScore == humanScore)
        console.warn("Its a tie!")
    if (computerScore < humanScore)
        console.warn("Congratulations! You are the Winner!");
}