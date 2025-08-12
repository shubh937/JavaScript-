let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let message = document.getElementById("message");

  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
  } else if (guess < 1 || guess > 100) {
    message.textContent = "Number must be between 1 and 100.";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
}

