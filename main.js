// Get the screen elements
const result = document.getElementById('result');
const history = document.getElementById('history');

// Function to insert a character in the screen
function insert(char) {
  // Check if the character is an operator or a dot
  if (['+', '-', '*', '/', '%', '.'].indexOf(char) !== -1) {
    // Check if the last character is already an operator or a dot
    if (['+', '-', '*', '/', '%', '.'].indexOf(result.innerText.slice(-1)) !== -1) {
      return;
    }
  }

  // Append the character to the screen
  result.innerText += char;
}

// Function to clear the screen
function clearScreen() {
  result.innerText = '';
  history.innerText = '';
}

// Function to delete the last character from the screen
function backspace() {
  result.innerText = result.innerText.slice(0, -1);
}

// Function to calculate the result
function calculate() {
  // Evaluate the expression
  let expression = result.innerText;
  let resultValue = eval(expression);

  // Display the result and the history
  result.innerText = resultValue;
  history.innerText = expression + ' = ' + resultValue;
}

