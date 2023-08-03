let expression = '';

function appendSymbol(symbol) {
  expression += symbol;
  updateDisplay(expression);
}

function clearDisplay() {
  expression = '';
  updateDisplay(expression);
}

function deleteChar() {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
}

function calculate() {
  try {
    const result = eval(expression);
    updateDisplay(result);
    expression = String(result);
  } catch (error) {
    updateDisplay('Error');
    expression = '';
  }
}

function updateDisplay(content) {
  document.getElementById('display').value = content;
}
