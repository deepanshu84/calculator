let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function calculate() {
  displayValue = eval(displayValue);
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}
