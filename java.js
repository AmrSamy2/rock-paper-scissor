let playerscore = 0
let compscore = 0
let result = ""
function getComputerChoice() {
  const computerAnswer = ['rock', 'paper', 'scissors']
  return computerAnswer[Math.floor(Math.random() * computerAnswer.length)];
}



// const player = prompt('pick rock, paper or scissors').toLowerCase;
function playround(playerSelection, computerSelection) {

  console.log(computerSelection)
  if (playerSelection == computerSelection) {
    return 'this is a tie!'
  } else if (playerSelection == 'paper' && computerSelection == 'rock' ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'rock' && computerSelection == 'scissors')) {
    playerscore += 1;
    return `you won! ${playerSelection} beats ${computerSelection}`
  }

  else {
    compscore += 1
    return 'you lost!'
  }

}

const playerSelection = prompt('pick rock, paper or scissors!');
computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 10; i++) {
    console.log(playround(playerSelection, getComputerChoice()))
    if (playerscore > compscore) {
      result = 'you won!'
    } else if (playerscore < compscore) {
      result = 'you lost!'
    }
  }
}
console.log(game());
console.log('player:', playerscore);
console.log('computer:', compscore);
console.log (result)