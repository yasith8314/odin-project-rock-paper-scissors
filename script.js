(function() {

const choises = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

function getComputerChoice() {
    return choises.at(Math.floor(Math.random() * 3));
}

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log("It's a tie.");
            return 0;
        }
        else if ((humanChoice == "rock" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "scissor") ||
                (humanChoice == "scissor" && computerChoice == "rock")) {
            console.log(`${computerChoice} beats ${humanChoice}. You Lose!`);
            computerScore++;
            return -1;
        }
        else {
            console.log(`${humanChoice} beats ${computerChoice}. You Win!`);
            humanScore++;
            return 1;
        }
}


function updateBanners(result) {
    if (result == 0) {
        document.querySelector(".result").textContent = "It's a tie!";
    }
    else if (result == 1) {
        document.querySelector(".result").textContent = "You win!";
        document.querySelector(".player-score").textContent = "Player Score: " + humanScore;
    }
    else {
        document.querySelector(".result").textContent = "You lose!";
        document.querySelector(".com-score").textContent = "Computer Score:" + computerScore;
    }

    document.querySelector(".round").textContent = "Round: " + roundNum;
}


let buttons = document.querySelectorAll(".plyer-choices button");
let cpuButton = document.querySelector(".com-choices button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        roundNum++;

        if (roundNum >= 6) {
            showBlurOverlay();
        }

        let humanChoice = button.id;
        let computerChoice = getComputerChoice();

        button.classList.remove('shake');
        setTimeout(() => button.classList.add('shake'), 10);
        let result = playRound(humanChoice, computerChoice);

        cpuButton.innerHTML = ""; // Clear previous image

        let img = document.createElement("img");
        img.src = `./images/${computerChoice}.png`;
        cpuButton.appendChild(img);

        cpuButton.classList.remove('shake');
        setTimeout(() => cpuButton.classList.add('shake'), 10);

        updateBanners(result);
    });
});


document.querySelectorAll(".reset").forEach(btn => btn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundNum = 1;

    document.querySelector(".result").textContent = "Make your choice!";
    document.querySelector(".round").textContent = "Round: 1";
    document.querySelector(".player-score").textContent = "Player Score: 0";
    document.querySelector(".com-score").textContent = "Computer Score: 0";

    document.getElementById('blur').style.display = 'none';
    document.querySelector(".com-choices button").innerHTML = "Make a Choice"; // Clear previous image
}));


function showBlurOverlay() {
  document.getElementById('blur').style = "display: flex; flex-direction: column; justify-content:center; align-items: center; gap:20px;"

    let str;
    if (computerScore > humanScore) {
        str = "You Lost :(";
    }
    else if (computerScore < humanScore) {
        str = "You Won :)";
    }
    else {
        str = "Match Tied!";
    }

    document.querySelector(".blur h2").textContent = str;
}

})();