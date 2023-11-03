const guessForm = document.getElementById('guess-form');
const userGuessInput = document.getElementById('user-guess');
const message = document.querySelector('#message');
const livesDisplay = document.querySelector('#lives');
const newGameButton = document.getElementById('new-game');

let minNumber = 1;
let maxNumber = 100;
let targetNumber;
let attempts = 0;
let remainingLives = 5;

function startNewGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  console.log(targetNumber);
  attempts = 0;
  minNumber = 1;
  maxNumber = 100;
  remainingLives = 5;
  livesDisplay.textContent = `Lives: ${remainingLives}`;
  guessForm.style.display = 'block';
  newGameButton.style.display = 'none';
  message.innerText = '';
}

startNewGame();

guessForm.addEventListener('submit', e => {
  e.preventDefault();

  const userGuess = parseInt(userGuessInput.value);

  attempts++;

  if (userGuess < targetNumber) {
    minNumber = userGuess;
    message.innerText = `Enter a number between ${minNumber} and ${maxNumber}`;
  } else if (userGuess > targetNumber) {
    maxNumber = userGuess;
    message.innerText = `Enter a number between ${minNumber} and ${maxNumber}`;
  } else {
    message.innerText = `Congratulation! You guessed the number ${targetNumber} in ${attempts}`;
    guessForm.style.display = 'none';
    newGameButton.style.display = 'block';
  }

  userGuessInput.value = '';

  if (attempts === 5) {
    remainingLives = 0;
    livesDisplay.textContent = `Lives: ${remainingLives}`;
    message.innerText =
      `You've run out of lives. The correct Number was: ` + targetNumber;
    guessForm.style.display = 'none';
    newGameButton.style.display = 'block';
  } else {
    remainingLives = 5 - attempts;
    livesDisplay.textContent = `Lives: ${remainingLives}`;
  }
});

newGameButton.addEventListener('click', startNewGame);





