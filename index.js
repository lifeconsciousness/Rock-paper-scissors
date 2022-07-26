let win = false;
let choice = 0;

function clickPlay(){
    var clickSound = new Audio('/sfx/click.wav');
    clickSound.play();
}

document.getElementById("rock").onclick = function(){
    clickPlay();
    choice = 0;
}
document.getElementById("paper").onclick = function(){
    clickPlay();
    choice = 0;
}
document.getElementById("scissors").onclick = function(){
    clickPlay();
    choice = 0;
}