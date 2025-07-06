let choises = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    return choises.at(Math.floor(Math.random() * 3));
}

function getHumanChoice() {
    return prompt();
}



function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log("It's a tie.");
        }
        else if ((humanChoice == "rock" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "scissor") ||
                (humanChoice == "scissor" && computerChoice == "rock")) {
            console.log(`${computerChoice} beats ${humanChoice}. You Lose!`);
            computerScore++;
        }
        else {
            console.log(`${humanChoice} beats ${computerChoice}. You Win!`);
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore == computerScore) {
        console.log(`The game is a tie (${humanScore}-${computerScore}). :|`);
    }
    else if (humanScore > computerScore) {
        console.log(`You won the game (${humanScore}-${computerScore}). :)`)
    }
    else {
        console.log(`You lost the game (${humanScore}-${computerScore}). :(`);
    }
}

playGame();