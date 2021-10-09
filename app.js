const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const setbtn = document.querySelector('#setBtn');
const scoreField = document.querySelector('#winningScore');

let p1score = 0, p2score = 0;
let winningScore;

setbtn.addEventListener('click', function(){
    winningScore = parseInt(scoreField.value);
    console.log(winningScore);
})

p1button.addEventListener('click', function (){
    p1score++; 
    document.querySelector("#p1display").innerHTML = p1score;
    if(p1score === winningScore){
        p1button.disabled = true;
        p2button.disabled = true;
        document.querySelector('#winner').innerHTML = "Player 1 Wins";
    }
})

p2button.addEventListener('click', function (){
    p2score++;
    document.querySelector("#p2display").innerHTML = p2score;
    if(p2score === winningScore){
        p1button.disabled = true;
        p2button.disabled = true;
        document.querySelector('#winner').innerHTML = "Player 2 Wins";
    }
})


reset.addEventListener('click', function (){
    p1score = 0;
    p2score = 0;
    document.querySelector("#p2display").innerHTML = 0;
    document.querySelector("#p1display").innerHTML = 0;
    p1button.disabled = false;
    p2button.disabled = false;
    scoreField.value = null;
    document.querySelector('#winner').innerHTML = "";
})


