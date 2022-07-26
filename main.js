let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    const choices = ['Rock','Paper','Scissors'];

    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}


function playRound(playerSelection,computerSelection) {

    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won! Rock beats scissors';

    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
        
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'

    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won! Paper beats Rock'

    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won! Scissors beats Paper'

    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'

    } else if(playerSelection === computerSelection) {
        return 'You Tied! Play again';
        
    }
    
}

function game() {
    const btnWrapper = document.querySelector('#btn-wrapper');


    const div1 = document.createElement('button');
    div1.textContent = 'Rock';
    div1.className = 'btn';

    const div2 = document.createElement('button');
    div2.textContent = 'Paper';
    div2.className = 'btn';

    const div3 = document.createElement('button');
    div3.textContent = 'Scissors';
    div3.className = 'btn';

    btnWrapper.append(div1,div2,div3);

    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const playerSelection = e.target.textContent.toLowerCase();

            const result = playRound(playerSelection,getComputerChoice());

            document.querySelector('#results').textContent = result;

            if(result.indexOf('Won') !== -1) {
                playerScore += 1;
                computerScore;

            } else if(result.indexOf('Lose') !== -1) {
                computerScore += 1;
                playerScore;

            } else if(result.indexOf('Tied') !== -1){
                playerScore;
                computerScore;

            }

            document.querySelector('#your-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;

            round += 1;
            document.querySelector('#round-count').textContent = round;

            announceWinner(playerScore,computerScore);
            
        })    
    })
}

game();

function announceWinner(playerScore,computerScore) {
    console.log({playerScore,computerScore});

    if(playerScore === 5) {
        document.querySelector('#results').textContent = 'Game Over! You Won';
        document.querySelector('#results').style.color = 'green'
        
        document.querySelectorAll('.btn').forEach(btn => {
            btn.disabled = true;
        })

    }else if(computerScore === 5) {
        document.querySelector('#results').textContent = 'Game Over! You Lost';
        document.querySelector('#results').style.color = 'red'
        
        document.querySelectorAll('.btn').forEach(btn => {
            btn.disabled = true;
        })
    }
    
}


document.querySelector('#reset-btn').addEventListener('click', () => {
    document.querySelector('#your-score').textContent = 0;
    document.querySelector('#computer-score').textContent = 0;

    window.location.reload()
})







