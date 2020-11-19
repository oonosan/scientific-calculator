const zero = document.getElementById('btn-0');
const one = document.getElementById('btn-1');
const two = document.getElementById('btn-2');
const three = document.getElementById('btn-3');
const four = document.getElementById('btn-4');
const five = document.getElementById('btn-5');
const six = document.getElementById('btn-6');
const seven = document.getElementById('btn-7');
const eight = document.getElementById('btn-8');
const nine = document.getElementById('btn-9');
const dot = document.getElementById('btn-dot');

const porcentage = document.getElementById('btn-porcentage');
const divide = document.getElementById('btn-divide');
const multiply = document.getElementById('btn-multiply');
const minus = document.getElementById('btn-minus');
const plus = document.getElementById('btn-plus');

const clear = document.getElementById('btn-clear');
const parenthesis = document.getElementById('btn-parenthesis');
const result = document.getElementById('btn-result');

const currentResultOutput = document.getElementById('temp-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const toaster = document.getElementById("toaster");

function writeSelectedButton(number) {
  currentCalculationOutput.textContent = currentCalculationOutput.textContent + number;
}

function writeTemporaryOperationResult(tempResult) {
  currentResultOutput.textContent = tempResult;
}

function clearDisplay() {
  currentCalculationOutput.textContent = '';
  currentResultOutput.textContent = '';
}

function maxDigitsWarning() {
  // Add the "show" class to DIV
  toaster.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ toaster.className = toaster.className.replace("show", ""); }, 3000);
}