const arr = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

console.log(computerPlay());