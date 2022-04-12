const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('.result');

let recordWin=0,round=0,outcome = "";
rock.onclick = () => startPlay("rock");
paper.onclick = () => startPlay("paper");
scissors.onclick = () => startPlay("scissors");

function computePlay (){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber == 1){
        return "rock";
    }else if (randomNumber == 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function startPlay (userShape){
    round++;
    let computeShape = computePlay();
    if(userShape == computeShape){
        outcome="draw";
    }else{
        if (userShape == "rock"){
            (computeShape == "paper") ? outcome="Beated by paper" : outcome="Beats"; 
        }else if (userShape == "paper"){
            (computeShape == "scissors") ? outcome="Beated by scissors" : outcome="Beats";
        }else{
            (computeShape == "rock") ? outcome="Beated by rock" : outcome="Beats";
        }
    }
    result.textContent = outcome;
    if( outcome == "Beats"){
        recordWin++;
    };
    if (round > 5){
        (recordWin >= 3) ? result.textContent = "YOU WIN" : result.textContent = "YOU LOSE";
        recordWin=0;
        round=0;
    }
}