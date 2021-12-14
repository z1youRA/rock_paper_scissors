const arr = ["rock", "paper", "scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

function playround(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    if(playerSelection == computerSelection) {
        div.textContent = "That's a draw! You both selected" + playerSelection;
        return 0;
    }
    else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        div.textContent = "You lose! " + playerSelection + " loses to " + computerSelection;
        return -1;
    }
    else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")) {
        div.textContent ="You win!" + playerSelection + " beats " + computerSelection;
        return 1;
    }
    else console.error("Invalid Input!");
    container.appendChild(div);
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
    button.addEventListener('click', () => playround(button.textContent, computerPlay()));
});