console.log("Hello World")

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    switch(random) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors"; 
        
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);
