const computerChoices = ['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * 3)].toLowerCase();
}

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
        const playerSelection = prompt("Please enter Rock, Paper or Scissors:").toLowerCase();

        
        playRound(playerSelection,getComputerChoice());

        const result = playRound(playerSelection,getComputerChoice());

        if(result.indexOf('Win') !== -1) {
            playerScore += 1;
            computerScore;

        } else if(result.indexOf('Lose') !== -1) {
            computerScore += 1;
            playerScore;

        } else if(result.indexOf('Tie') !== -1){
           playerScore += 0;
           computerScore += 0;
        }

        console.log({playerScore,computerScore});
        console.log(result);
        rounds--;
    }


    announceWinner();
}

game();

function announceWinner() {
    if(playerScore > computerScore) {
        console.log("You're the winner!" + {yourScore: playerScore, computerScore});
    } else if(playerScore < computerScore) {
        console.log('You Lost!' + {yourScore: playerScore, computerScore});
    } else if(playerScore === computerScore) {
        console.log('You tie!' + {yourScore: playerScore, computerScore});
        
    }
    
}

