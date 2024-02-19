function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // winning scene
    const winningSenario = {
        rock: 'scissor',
        paper: 'rock',
        scissor: 'paper'
    };
    // to check a tie
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a Tie";
    }
    // check if player wins
    if (winningSenario[playerSelection] === computerSelection.toLowerCase())
    return 'You Win! ${playerSelection} beats ${computerSelection}';
    // If it's not a tie and player didn't win, then computer wins
    return`You Lose! ${computerSelection} beats ${playerSelection}`;        
}
const playerSelection='Rock';
const computerSelection=getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
function playGame(){
    let playerscore=0;
    let computerscore=0;
    // round 1
    let playerSelection1=prompt("Enter your choice for round 1 (Rock, Paper, or Scissor):");
    let computerSelection1=getComputerChoice();
    let result1 = playRound(playerSelection1, computerSelection1);
    console.log(result1);
    if (result1.startsWith("You Win!")){
        playerscore++
    }else  if(result1.startsWith("You Lose!")){
        computerscore++
    }
    // round 2
    let playerSelection2=prompt("Enter your choice for round 2 (Rock, Paper, or Scissor):");
    let computerSelection2=getComputerChoice();
    let result2 = playRound(playerSelection2, computerSelection2);
    console.log(result2);
    if (result2.startsWith("You win!")){
        playerscore++
    }else if(result2.startsWith("You Lose!")){
        computerscore++
    }
    //round 3
    let playerSelection3=prompt("Enter your choice for round 3 (Rock, Paper, or Scissor):");
    let computerSelection3=getComputerChoice();
    let result3 = playRound(playerSelection3, computerSelection3);
    console.log(result3);
    if(result3.startsWith("You Win!")){
        playerscore++
    }else if(result3.startsWith("You Lose!")){
        computerscore++
    }
    // round4
    let playerSelection4=prompt("Enter your choice for round 4 (Rock, Paper, or Scissor):");
    let computerSelection4=getComputerChoice();
    let result4 = playRound(playerSelection4, computerSelection4);
    console.log (result4);
    if(result4.startsWith("You Win!")){
        playerscore++
    }else if(result4.startsWith("You Lose!")){
        computerscore++
    }
    //round5
    let playerSelection5=prompt("Enter your choice for round 5 (Rock, Paper, or Scissor):");
    let computerSelection5=getComputerChoice();
    let result5 = playRound(playerSelection5, computerSelection5);
    console.log (result5);
    if(result5.startsWith("You Win!")){
        playerscore++
    }else if(result5.startsWith("You Lose!")){
        computerscore++
    }
    //report of winner
    if(playerscore > computerscore){
        console.log("You Win the Game!");
    }else if(playerscore < computerscore){
        console.log("You Lose the Game!")
    }else{
        console.log("It's a Tie!")
    }
}

playGame();