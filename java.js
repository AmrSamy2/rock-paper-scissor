
function getComputerChoice() {
  const computerAnswer = ['rock', 'paper', 'scissors']
  return computerAnswer[Math.floor(Math.random() * computerAnswer.length)];
}



// const player = prompt('pick rock, paper or scissors').toLowerCase;
function playround(playerSelection, computerSelection) {

  console.log(computerSelection)
  if (playerSelection == computerSelection) {
    return 'this is a tie!'
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return `you won! paper beats ${computerSelection}`
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return `you won! scissors beats ${computerSelection}`
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return `you won! rock beats ${computerSelection}`
  } else { return 'you lost!' }
}

const playerSelection = prompt('pick rock, paper or scissors!');
computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playround(playerSelection, getComputerChoice()))
  }
}
console.log(game());