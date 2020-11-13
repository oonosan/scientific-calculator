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

const porcentage = document.getElementById('btn-porcentage');
const divide = document.getElementById('btn-divide');
const multiply = document.getElementById('btn-multiply');
const minus = document.getElementById('btn-minus');
const plus = document.getElementById('btn-plus');

const clear = document.getElementById('btn-clear');
const parenthesis = document.getElementById('btn-parenthesis');
const dot = document.getElementById('btn-dot');
const result = document.getElementById('btn-result');

const currentResultOutput = document.getElementById('temp-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function writeNumber(number) {
  currentCalculationOutput.textContent = currentCalculationOutput.textContent + number;
}
