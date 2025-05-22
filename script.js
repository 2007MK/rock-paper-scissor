console.log("Hello World")

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    switch(random) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors"; 
        
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your Choice (Rock, Paper or Scissors)")
    return choice;
}
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(computerChoice, humanChoice);


function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    let humanScore = 0
    let computerScore = 0
    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            console.log("You Lose!, Computer chose paper")
            console.log("Your score is 0")
            computerScore++
        } 
        else if(computerChoice === "scissors") {
            console.log("You win! Computer chose scissors")
            console.log("Your score is " + ++humanScore)
        }
        else {
            console.log("It's a Tie, you both chose rock")
        }

    }
    if(humanChoice === "paper") {
        if(computerChoice === "scissors") {
            console.log("You Lose!, Computer chose scissors")
            console.log("Your score is 0")
            computerScore++
        } 
        else if(computerChoice === "rock") {
            console.log("You win! Computer chose rock")
            console.log("Your score is " + ++humanScore)
        }
        else {
            console.log("It's a Tie, you both chose paper")
        }

    }
    if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("You Lose!, Computer chose rock")
            console.log("Your score is 0")
            computerScore++
        } 
        else if(computerChoice === "paper") {
            console.log("You win! Computer chose paper")
            console.log("Your score is " + ++humanScore)
        }
        else {
            console.log("It's a Tie, you both chose scissors")
        }

    }

}

