let getComputerChoice = () => {
  let Computernum = Math.floor(Math.random() * 3);
  console.log(Computernum);
  if (Computernum === 0) {
    return "rock";
  } else if (Computernum === 1) {
    return "paper";
  } else {
    return "scissor";
  }
};
console.log(getComputerChoice());

let getHumanChoice = () => {
  let HumanInput = prompt("Play rock, paper, scissor");
  HumanInput = HumanInput.toLowerCase();
  return HumanInput;
};
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let playGame = () => {
  let playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      return "It's a tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You Win! ${humanChoice} beats ${computerChoice}`
    } else {
      computerScore++;
      return `Computer Wins! ${computerChoice} beats ${humanChoice}`
    }
  };
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));
//   console.log(`Your Score = ${humanScore}`);
//   console.log(`Computer's Score = ${computerScore}`);
  return;
};
let result = playGame();
// if (result === "You Win") {
//   humanScore++;
// } else if (result === "Computer Wins...") {
//   computerScore++;
// }
result = playGame();
result = playGame();

console.log(`Your Score = ${humanScore}`);
console.log(`Computer's Score = ${computerScore}`);
// let gameResult = () => {}
// console.log(gameResult())

  if (humanScore === computerScore) {
    console.log("THE GAME IS TIED")
} else if (humanScore > computerScore) {
    console.log("YOU WIN THE GAME")
} else {
    console.log("COMPUTER WINS THE GAME")
}