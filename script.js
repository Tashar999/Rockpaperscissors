// rock = 1, paper = 2, scissors = 3

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

    return console.log(computerChoice);
}

function getHumanChoice() {
    humanChoice = prompt('Rock, paper, or scissors?');
        return humanChoice.toLowerCase();
        }


function playRound() {
    humanChoice ==  getHumanChoice()
    computerChoice == getComputerChoice()
    if (computerChoice == humanChoice){
        console.log('TIE!!!!!!!!!!!!!!!!!')
    } else if (computerChoice == 'rock' & humanChoice == 'scissors'){
        console.log('You lost haha')
    } else if (computerChoice == 'scissors' & humanChoice == 'paper'){
        console.log('You lost haha')
    } else if (computerChoice == 'paper' & humanChoice == 'rock'){
        console.log('You lost haha')
    } else {
        console.log('Winnerrrrr')
    }
}

// function playGame(){
// playRound();
// playRound();
// playRound();
// playRound();
// playRound();
// }

// playGame()