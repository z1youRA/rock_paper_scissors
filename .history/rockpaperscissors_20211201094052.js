const arr = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

function compareWinner(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        return 
    }
}

console.log(compareWinner("sCissors", computerPlay()));