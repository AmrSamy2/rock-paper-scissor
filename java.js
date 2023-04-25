let playerscore = 0;
let compscore = 0;
let result = "";
const Pscore = document.querySelector('.playerScore');
const Cscore = document.querySelector('.computerScore');
const scoreBoard = document.querySelector('.scoreBoard');
const score = document.querySelector('.score')

function getComputerChoice() {
  const computerAnswer = ['rock', 'paper', 'scissor']
  return computerAnswer[Math.floor(Math.random() * computerAnswer.length)];
};



// const player = prompt('pick rock, paper or scissors').toLowerCase;
function playround(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  console.log('computer selection: ', computerSelection)
  console.log('player selection:', playerSelection)
  if (playerSelection == computerSelection) {
    return console.log('this is a tie!'),
      Pscore.textContent = `Player:  ${playerscore}`,
      Cscore.textContent = `Computer:  ${compscore}`
      // console.log('player:', playerscore),
      // console.log('computer:', compscore);

  }

  else if (playerSelection == 'paper' && computerSelection == 'rock' ||
    (playerSelection == 'scissor' && computerSelection == 'paper') ||
    (playerSelection == 'rock' && computerSelection == 'scissor')) {
    playerscore += 1;
    return `you won! ${playerSelection} beats ${computerSelection}`,
      Pscore.textContent = `Player:  ${playerscore}`,
      Cscore.textContent = `Computer:  ${compscore}`
      // console.log('player:', playerscore),
      // console.log('computer:', compscore);

  }

  else {
    if (playerscore > compscore && playerscore == 5) {
      scoreBoard.textContent = 'Game over,you won!',
      console.log('Game over,you won!'),
        compscore -= compscore,
        playerscore -= playerscore;
        Pscore.textContent = `Player:  ${playerscore}`,
        Cscore.textContent = `Computer:  ${compscore}`

    } else if (compscore > playerscore && compscore == 5) {
      scoreBoard.textContent = 'Game over,you won!'
      console.log('Game over, you lost!'),
        compscore -= compscore,
        playerscore -= playerscore;
      Pscore.textContent = `Player:  ${playerscore}`,
        Cscore.textContent = `Computer:  ${compscore}`

    } else {
      compscore += 1;
      if (playerscore > compscore && playerscore == 5) {
        scoreBoard.textContent = 'Game over,you won!',
        console.log('Game over,you won!'),
          compscore -= compscore,
          playerscore -= playerscore;
          Pscore.textContent = `Player:  ${playerscore}`,
          Cscore.textContent = `Computer:  ${compscore}`

      } else if (compscore > playerscore && compscore == 5) {
        scoreBoard.textContent = 'Game over,you lost!',
        console.log('Game over,you lost!'),
          Pscore.textContent = `Player:  ${playerscore}`,
          Cscore.textContent = `Computer:  ${compscore}`,
          compscore -= compscore,
          playerscore -= playerscore

      } else {
        return console.log(`you lost!${computerSelection} beats ${playerSelection}`),
          Pscore.textContent = `Player:  ${playerscore}`,
          Cscore.textContent = `Computer:  ${compscore}`,
          console.log('player:', playerscore),
          console.log('computer:', compscore);
      }
    }
  }

};
// if (playerscore > compscore) {
//   result = 'you won!'
// } else if (playerscore < compscore) {
//   result = 'you lost!'
// }
// let playerSelection = ""
// computerSelection = getComputerChoice();

// function game() {
//   for (let i = 0; i < 10; i++) {
//     console.log(playround(playerSelection, getComputerChoice()))
//     if (playerscore > compscore) {
//       result = 'you won!'
//     } else if (playerscore < compscore) {
//       result = 'you lost!'
//     }
//   }
// }

const rock = document.querySelector('.btn-R')


rock.addEventListener('click', function () {
  playround(playerSelection = 'rock')



});



const paper = document.querySelector('.btn-P')

paper.addEventListener('click', function () {
  playround(playerSelection = 'paper')




});

const scissor = document.querySelector('.btn-S')

scissor.addEventListener('click', function () {
  playround(playerSelection = 'scissor')




});


// console.log(game());
// console.log('player:', playerscore);
// console.log('computer:', compscore);
// console.log(result)
