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
// console.log(playerSelection)

// console.log(computerSelection);

function playRound(playerSelection,computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats scissors');
        playerScore += 1;
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        computerScore += 1;
    } else if(playerSelection === computerSelection) {
        // console.log(computerSelection);
        console.log('You tie! Play again');
        playerScore;
        computerScore;
    }

    return {
        playerScore: playerScore,
        computerScore: computerScore
    }
}

// playRound(playerSelection,computerSelection);

function game() {
    // let playerScore = 0;
    // let computerScore = 0;

    // for (let i = 0; i < 2; i++) {
    //     playRound(playerSelection,computerSelection);
    //  }

     const rounds = [1,2,3,4,5];

     rounds.forEach(round => {
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        
     })

}

game();