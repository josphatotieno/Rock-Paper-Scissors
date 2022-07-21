const choices = ['Rock','Paper','Scissors'];
let playerScore;
let computerScore;

function getComputerChoice() {
    // console.log(choices[Math.floor(Math.random() * 3)]);
    return choices[Math.floor(Math.random() * 3)];
}
// console.log(Math.floor(Math.random() * 3))


const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = 'RoCk'.toLowerCase();
// const playerSelection = prompt("What's your choice?").toLowerCase();
console.log(playerSelection)

console.log(computerSelection);

function playRound(playerSelection,computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        // console.log(playerScore,computerScore);
        // console.log('You win');
        return 'You Win! Rock beats scissors';
        
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        // console.log(playerScore,computerScore);
        // console.log('You lose');
        return 'You Lose! Paper beats Rock';
        
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'

    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'

    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'

    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'

    } else if(playerSelection === computerSelection) {
        // console.log(computerSelection);
        playerScore;
        computerScore;
        // console.log(playerScore,computerScore);
        // console.log('You tie');
        return 'You tie! Play again';
        
    }

    // console.log(playerScore,computerScore);

    // return {
    //     playerScore: playerScore,
    //     computerScore: computerScore
    // }
    
}




function game() {

    console.log(playRound(playerSelection,computerSelection));
    for (let i = 0; i < 5; i++) {
         
     }

}

game();

