const arr = ["rock", "paper", "scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

function compareWinner(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        console.log("That's a draw! " + playerSelection + " equals " + computerSelection);
        return 0;
        // return "That's a draw! " + playerSelection + " equals " + computerSelection;
    }
    else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        console.log("You lose! " + playerSelection + " loses to " + computerSelection);
        return -1;
        // return "You lose! " + playerSelection + " loses to " + computerSelection; 
    }
    else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")) {
        console.log("You win!" + playerSelection + " beats " + computerSelection);
        return 1;
        // return "You win!" + playerSelection + " beats " + computerSelection;
    }
    else console.error("Invalid Input!");
}

//Get input from user for 5 times and make the computer pick a random choice and then compete.
function game() {
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Make your choice from rock, paper and scissors:");
        compareWinner(playerSelection, computerPlay());
    }
}

console.log(compareWinner("sCissors", computerPlay()));