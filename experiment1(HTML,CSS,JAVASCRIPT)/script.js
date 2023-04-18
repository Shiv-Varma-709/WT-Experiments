const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const result = document.querySelector('#result');

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

btnRock.addEventListener('click', () => {
  const computerSelection = computerPlay();
  result.textContent = playRound('rock', computerSelection);
});

btnPaper.addEventListener('click', () => {
  const computerSelection = computerPlay();
  result.textContent = playRound('paper', computerSelection);
});

btnScissors.addEventListener('click', () => {
  const computerSelection = computerPlay();
  result.textContent = playRound('scissors', computerSelection);
});

