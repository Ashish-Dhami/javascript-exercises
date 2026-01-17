const CHOICE = {
  0: "rock",
  1: "paper",
  2: "scissors",
};
Object.freeze(CHOICE);

function getComputerChoice() {
  return CHOICE[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
const myScoreNode = document.querySelector(".my-score");
const computerScoreNode = document.querySelector(".pc-score");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.textContent = `Round tied! Both are ${
      humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
    }`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      results.textContent = "You lose! Paper beats Rock";
    } else {
      humanScore++;
      results.textContent = "You win! Rock beats Scissors";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      results.textContent = "You lose! Scissors beats Paper";
    } else {
      humanScore++;
      results.textContent = "You win! Paper beats Rock";
    }
  } else {
    if (computerChoice === "rock") {
      computerScore++;
      results.textContent = "You lose! Rock beats Scissors";
    } else {
      humanScore++;
      results.textContent = "You win! Scissors beats Paper";
    }
  }
}

function updateGameStatus() {
  // Display the running score, and announce a winner of the game once one player reaches 5 points.
  myScoreNode.textContent = humanScore;
  computerScoreNode.textContent = computerScore;
  if ([humanScore, computerScore].some((score) => score === 5)) {
    setTimeout(() => {
      alert(
        `Winner is ${
          humanScore === 5 ? "HUMAN" : "COMPUTER"
        } !!\nStarting a new game...`
      );
      cleanup();
    }, 0);
  }
}

function cleanup() {
  humanScore = 0;
  computerScore = 0;
  results.textContent = "";
  myScoreNode.textContent = "0";
  computerScoreNode.textContent = "0";
}

const humanSelections = document.querySelector(".humanSelections");
humanSelections.addEventListener("click", (e) => {
  const humanSelection = CHOICE[e.target.value];
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  updateGameStatus();
});
