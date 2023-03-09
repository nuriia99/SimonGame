var colors = ["green", "red", "yellow", "blue"];
var game = 0;// 0 no started, 1 started

var seq = [];

$(document).keydown(function(event){
    if(game === 0 ) startGame();
});

function startGame(){
    game = 1;
    seq = [];
    nextSequence();
}

$(".btn").click(function(e){
    var idClicked = e.target.id;
    var audio = new Audio("./sounds/"+idClicked+".mp3");
    audio.play();
    
    $("#"+idClicked)[0].classList.add("pressed");
    setTimeout(function () {
        $("#"+idClicked).removeClass("pressed");
        }, 100);
    if(seq[seqNumber] === "#"+idClicked) correct();
    else incorrect();
  });

function nextSequence(){
    seqNumber = 0;
    var randomValue = Math.floor(Math.random()*4); //0 1 2 3
    var audio = new Audio("./sounds/"+colors[randomValue]+".mp3");
    audio.play();
    $("#"+colors[randomValue]).fadeOut(100).fadeIn(100);
    seq.push("#"+colors[randomValue]);
    $("#level-title")[0].innerHTML = "Level "+seq.length;
}

function correct(){
    if(seqNumber === seq.length-1) {
        setTimeout(function () {
            nextSequence();
            }, 1000);
    }
    else seqNumber++;
    
    
}

function incorrect(){
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("#level-title")[0].innerHTML = "Game Over, Press Any Key to Restart";
    game = 0;
}