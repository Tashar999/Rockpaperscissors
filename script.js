// rock = 1, paper = 2, scissors = 3

humanScore = 0
computerScore = 0

function getComputerChoice() {
    let choice = '';
    console.log(choice);
    const rng = Math.ceil(Math.random() * 3);

    if (rng === 1) {
        choice = 'rock';
    } else if (rng === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return console.log(choice);
}

function getHumanChoice() {
    
}



getComputerChoice();