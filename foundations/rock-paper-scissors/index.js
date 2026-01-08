const CHOICE = {
  0: "rock",
  1: "paper",
  2: "scissors",
};
Object.freeze(CHOICE);

function getComputerChoice() {
  return CHOICE[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("Rock,Paper or Scissors ?").toLowerCase();
}

function playGame(rounds = 5) {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Round tied! Both are ${humanChoice || computerChoice}`);
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
      } else {
        humanScore++;
        console.log("You win! Rock beats Scissors");
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
      } else {
        humanScore++;
        console.log("You win! Paper beats Rock");
      }
    } else {
      if (computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
      } else {
        humanScore++;
        console.log("You win! Scissors beats Paper");
      }
    }
  }
  while (rounds > 0) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    rounds--;
  }
  if (humanScore > computerScore) alert("Winner is HUMAN !!");
  else if (humanScore < computerScore) alert("Winner is COMPUTER !!");
  else alert("Game TIED !!");
}

playGame();
