const arr = ["rock", "paper", "scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

function compareWinner(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        return "That's a draw! " + playerSelection + " equals " + computerSelection;
    }
    else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        return "You lose! " + playerSelection + " loses to " + computerSelection; 
    }
    else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")) {
        return "You win!" + playerSelection + " beats " + computerSelection;
    }
    else console.error("Invalid Input!");
}

function game()

console.log(compareWinner("sCissors", computerPlay()));