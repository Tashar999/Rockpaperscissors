// rock = 1, paper = 2, scissors = 3

humanScore = 0
computerScore = 0
let

function getComputerChoice() {
    let computerChoice = '';
    console.log(computerChoice);
    const rng = Math.ceil(Math.random() * 3);
    if (rng === 1) {ds
        computerChoice = 'rock';
    } else if (rng === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'; }

    return console.log(computerChoice);
}

function getHumanChoice() {
    let humanChoice = '';
    console.log(humanChoice)
    humanChoice = prompt('What are you gonna play?');
        return humanChoice.toLowerCase();
        }


function playRound(humanChoice, computerChoice) {
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

humanChoice ==  getHumanChoice()
computerChoice == getComputerChoice()

playRound(humanChoice, computerChoice);