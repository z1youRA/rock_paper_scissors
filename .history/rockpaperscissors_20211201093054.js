const arr = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

log.console(computerPlay);