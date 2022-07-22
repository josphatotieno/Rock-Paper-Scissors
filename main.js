const choices = ['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}



const yourSelection = 'RoCk'.toLowerCase();
// const playerSelection = prompt("What's your choice?").toLowerCase();

function playRound(playerSelection,computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats scissors';
        
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
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
        return 'You Tie! Play again';
        
    }
    
}

function game() {

    let rounds = 5;

    while(rounds > 0) {
        playRound(yourSelection,getComputerChoice());

        if(playRound(yourSelection,getComputerChoice()).indexOf('Win') !== -1) {
            playerScore += 1
            // console.log(playerScore);
            // console.log('You win');
        } else if(playRound(yourSelection,getComputerChoice()).indexOf('Lose') !== -1) {
            computerScore += 1
            // console.log(computerScore);
            // console.log('You Lose');
        } else if(playRound(yourSelection,getComputerChoice()).indexOf('Tie') !== -1){
            // console.log('You Tie');
            // playerScore += 0;
            // computerScore += 0;
            playRound(yourSelection,getComputerChoice());
            const val = playRound(yourSelection,getComputerChoice());
            if(val.indexOf('Win') !== -1) {
                playerScore += 1;
            } else if(val.indexOf('Lose') !== -1) {
                computerScore += 1;
            }
            
        }
        rounds--;
    }

    if(playerScore > computerScore) {
        console.log("You're the winner!");
    } else if(playerScore < computerScore) {
        console.log('You Lost!');
    } else if(playerScore === computerScore) {
        console.log('You tie!');
        console.log(playRound(yourSelection,getComputerChoice()));
        
    }

    console.log(playerScore,computerScore);

}

game();

