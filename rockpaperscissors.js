////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   move = move || getInput();
   return move;
}

function getComputerMove(move) {
      move = move || randomPlay();
      return move;
}

 function getWinner(playerMove,computerMove) {
    var winner;
 if (playerMove === computerMove);{
     winner="tie";
}if (playerMove === 'scissors'){
     if (computerMove === 'paper')
     winner="player";
     else if (computerMove === 'rock')
    winner= "computer";
}else if (playerMove === 'rock') {
     if (computerMove === 'paper')
     winner= "computer";
     else if (computerMove === 'scissors') 
      winner= "player";
}else (playerMove === 'paper');{
     if (computerMove === 'scissors')
      winner= "computer";
     else if (computerMove === 'rock')
     winner="player";
}
 getWinner(playerMove,computerMove); 
 return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5);{
       return (playerWins + 1 && computerWins +1);
    }
    
    return [playerWins, computerWins];
}


