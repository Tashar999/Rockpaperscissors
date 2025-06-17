// rock = 1, paper = 2, scissors = 3
rock = document.getElementById('rock')
paper = document.getElementById('paper')
scissors = document.getElementById('scissors')

roundsPlayed = 0
humanScore = 0
computerScore = 0

let humanChoice = ""
let computerChoice  = ""


function getComputerChoice() {
    const rng = Math.ceil(Math.random() * 3);
    if (rng === 1) {
        computerChoice = 'rock';
    } else if (rng === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'; }

    return computerChoice;
}

function displayResult (result){
    if (computerScore == 5) {
        result = "You Lost, Computer Won!!! Refresh to play again"
        document.getElementById('btns').innerHTML = "";
    } else if (humanScore == 5) {
        result = "Winner, Human Won!!! Refresh to play again"
    }
    const Comp = document.getElementById('comp');
    const Player = document.getElementById('player'); 
    const resultDiv = document.getElementById('results');
    const resP = document.createElement("p");
    resP.textContent = result;
    resultDiv.appendChild(resP)
    Comp.textContent = "COMPUTER SCORE\n" + computerScore;
    Player.textContent = "PLAYER SCORE\n" + humanScore;

}

function playRound(humanChoice) {
    computerChoice == getComputerChoice()
    if (computerChoice == humanChoice){
        displayResult('TIE!!!!!!!!!!!!!!!!! \n')
    } else if (computerChoice == 'rock' & humanChoice == 'scissors'){
        computerScore += 1
        displayResult('You lost haha \n')
    } else if (computerChoice == 'scissors' & humanChoice == 'paper'){
        computerScore += 1
        displayResult('You lost haha \n')
    } else if (computerChoice == 'paper' & humanChoice == 'rock'){
        computerScore += 1
        displayResult('You lost haha \n')
    } else {
        humanScore += 1
        displayResult('Winnerrrrr \n')
    }
}




rock.addEventListener("click", () => {
    playRound('rock')
});

paper.addEventListener("click", () => {
    playRound('paper')
});

scissors.addEventListener("click", () => {
    playRound('scissors') 
});

