let win = false;
let choice = 0;
let playerWins = 0;
let computerWins = 0;

function clickPlay(){
    var clickSound = new Audio('/sfx/click.wav');
    clickSound.volume = 0.8;
    clickSound.play();
}

//1-rock 2-paper 3-scissors

document.getElementById("rock").onclick = function(){
    clickPlay();
    choice = 1;
    computerChoice();
    updateScore();
    checkWin();
}
document.getElementById("paper").onclick = function(){
    clickPlay();
    choice = 2;
    computerChoice();
    updateScore();
    checkWin();
}
document.getElementById("scissors").onclick = function(){
    playerWins++;
    clickPlay();
    choice = 3;
    computerChoice();
    updateScore();
    checkWin();
}

function updateScore(){
    document.getElementById("player-score").innerHTML = "You: " + playerWins;
    document.getElementById("computer-score").innerHTML = "Computer: " + computerWins;
}

function computerChoice(){
    let compChoice = (Math.random() * 3) + 1;
    if(compChoice === 1 && choice === 3 || compChoice === 2 && choice === 1 || compChoice === 3 && choice === 2){
        computerWins++;
    }
    if(compChoice === choice){
        return;
    }
    else if(compChoice === 3 && choice === 1 || compChoice === 1 && choice === 2 || compChoice === 2 && choice === 3){
        playerWins++;
    }
}

function checkWin(){
    if(playerWins === 5){
        win = true;
        winPlay();
        resetGame();
        document.getElementById("win-message").innerHTML = "Player wins!";
    }
    else if(computerWins === 5){
        win = false;
        losePlay();
        resetGame();
        document.getElementById("win-message").innerHTML = "Computer won!";
    }

    if(playerWins === 1 || computerWins === 1){
        document.getElementById("win-message").innerHTML = "";
    }
}

function winPlay(){
    var clickSound = new Audio('/sfx/win.wav');
    clickSound.volume = 0.25;
    clickSound.play();
}

function losePlay(){
    var clickSound = new Audio('/sfx/lose.wav');
    clickSound.volume = 0.25;
    clickSound.play();
}

function resetGame(){
    choice = 0;
    playerWins = 0;
    computerWins = 0; 
    updateScore();
    document.getElementById("win-message").innerHTML = "";
}

document.getElementById("reset-btn").onclick = function(){
    resetGame();
}

