<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="calculator">
    <div class="display" id="display">0</div>
    <button class="btn" onclick="clearDisplay()">A/C</button>
    <button class="btn" onclick="appendToDisplay('7')">7</button>
    <button class="btn" onclick="appendToDisplay('8')">8</button>
    <button class="btn" onclick="appendToDisplay('9')">9</button>
    <button class="btn" onclick="appendToDisplay('/')">/</button>
    <button class="btn" onclick="appendToDisplay('4')">4</button>
    <button class="btn" onclick="appendToDisplay('5')">5</button>
    <button class="btn" onclick="appendToDisplay('6')">6</button>
    <button class="btn" onclick="appendToDisplay('*')">*</button>
    <button class="btn" onclick="appendToDisplay('1')">1</button>
    <button class="btn" onclick="appendToDisplay('2')">2</button>
    <button class="btn" onclick="appendToDisplay('3')">3</button>
    <button class="btn" onclick="appendToDisplay('-')">-</button>
    <button class="btn" onclick="appendToDisplay('0')">0</button>
    <button class="btn" onclick="appendToDisplay('.')">.</button>
    <button class="btn" onclick="calculate()">=</button>
    <button class="btn" onclick="appendToDisplay('+')">+</button>
  </div>
  <script src="script.js"></script>
</body>
</html>


css.style
.calculator {
  width: 300px;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.display {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 24px;
}

.btn {
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
}


javascript.js
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
