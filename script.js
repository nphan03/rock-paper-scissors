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

function startPlay (userShape, computeShape){
    if(userShape == computePlay){
        return "draw";
    }else{
        if (userShape == "rock"){
            return (computeShape == "paper") ? "Beated by paper" : "win"; 
        }else if (userShape == "paper"){
            return (computeShape == "scissors") ? "Beated by scissors" : "win";
        }else{
            return (computeShape == "rock") ? "Beated by rock" : "win";
        }
    }
}

function game (){
    let recordWin=0;
    for (let i = 0; i<5; i++){
        let userShape = prompt("Choose rock, paper or scissors", "");
        let computeShape = computePlay();
        let outcome = startPlay(userShape.toLowerCase(), computeShape);
        if( outcome == "win"){
            recordWin++;
        };
        console.log(outcome);
    }
    (recordWin >= 3) ? console.log("YOU WIN") : console.log("YOU LOSE");
}