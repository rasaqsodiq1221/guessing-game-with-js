let randomNumber = Math.floor(Math.random() * 50) + 1;

const guesses = document.querySelector ('.guesses');
const rightOrWrong = document.querySelector ('.rightOrWrong');
const lowOrHigh = document.querySelector ('.lowOrHigh');

const guessInput = document.querySelector ('.guessInput');
const guessSubmit = document.querySelector ('.guessSubmit');

let guessCount = 1;
let resetButton;

function checkGuess () {
  const userGuess = Number(guessInput.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    rightOrWrong.textContent = "correct! simple, isn't it? ";
    rightOrWrong.style.backgroundColor = 'green';
    lowOrHigh.textContent = ' ';
    setGameOver();
  }

  else if (guessCount === 5) {
    rightOrWrong.textContent = 'GAMEOVER!!!';
    rightOrWrong.style.backgroundColor = 'red';
    lowOrHigh.textContent = " ";
    setGameOver();
  }

  else {
    rightOrWrong.textContent = "wrong! guess again jare "
    rightOrWrong.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "too low! go up! ";  
    }
    else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "too high! go down! ";  
    }

    guessCount ++;
    guessInput.value = " ";
    guessInput.focus();
    console.log(guessCount)
  }
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessInput.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement ('button');
  resetButton.textContent = "Dare again!";
  document.body.append (resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 0;
  
  const resetResults = document.querySelectorAll ('.results h2');
  for (const resetResult of resetResults) {
    resetResult.textContent = " ";
  }
  
  resetButton.parentNode.removeChild(resetButton);
  
  guessInput.disabled = false;
  guessSubmit.disabled = false;
  guessInput.value = ' ';
  guessInput.focus();
  
  rightOrWrong.style.backgroundColor = 'white';
  
  randomNumber = Math.floor(Math.random() * 50) + 1;
  console.log("Heyy")
}

