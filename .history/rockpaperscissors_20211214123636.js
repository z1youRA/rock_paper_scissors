const arr = ["rock", "paper", "scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

function playround(playerSelection, computerSelection){
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
    let winTimes = 0;
    let result = 0;
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Make your choice from rock, paper and scissors:");
        result = playround(playerSelection, computerPlay())
        if(result == 1) {
            winTimes++;
        }
        else if(result == -1) {
            winTimes--;
        }
    }
    if(winTimes > 0) {
        console.log("Yes, you win!");
    }
    else if(winTimes < 0) {
        console.log("Sorry, you lose!");
    }
    else {
        console.log("That's a draw, try again.");
    }
}

// game();

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => {
    button.onclick = console.log(button.textContent);
});


