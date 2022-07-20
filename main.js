const choices = ['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // console.log(choices[Math.floor(Math.random() * 3)]);
    return choices[Math.floor(Math.random() * 3)];
}
// console.log(Math.floor(Math.random() * 3))


const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = 'RoCk'.toLowerCase();
// const playerSelection = prompt("What's your choice?");
// console.log(playerSelection)

// console.log(computerSelection);

function playRound(playerSelection,computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        console.log('You win');
        return 'You Win! Rock beats scissors';
        
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        console.log('You lose');
        return 'You Lose! Paper beats Rock';
        
    } else if(playerSelection === computerSelection) {
        // console.log(computerSelection);
        playerScore;
        computerScore;
        console.log('You tie');
        return 'You tie! Play again';
        
    }

    // return {
    //     playerScore: playerScore,
    //     computerScore: computerScore
    // }
    
}

// playRound(playerSelection,computerSelection);

function game() {
    // let playerScore = 0;
    // let computerScore = 0;

    // for (let i = 0; i < 2; i++) {
    //     playRound(playerSelection,computerSelection);
    //  }

    //  const rounds = [1,2,3,4,5];

    //  rounds.forEach(round => {
    //     console.log(playRound(playerSelection,computerSelection)); 
    
    //  })

    playRound(playerSelection,computerSelection);

}

let rounds = 5;

while(rounds > 0) {
    game();
    rounds--;
}

