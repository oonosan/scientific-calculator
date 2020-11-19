let digitsEntered = 0;
const MAX_DIGITS = 15;
let equationEntered = '';
let logOperations = [];

function selectZero() {
  writeNumberToDisplay('0');
}

function selectOne() {
  writeNumberToDisplay('1');
}

function selectTwo() {
  writeNumberToDisplay('2');
}

function selectThree() {
  writeNumberToDisplay('3');
}

function selectFour() {
  writeNumberToDisplay('4');
}

function selectFive() {
  writeNumberToDisplay('5');
}

function selectSix() {
  writeNumberToDisplay('6');
}

function selectSeven() {
  writeNumberToDisplay('7');
}

function selectEight() {
  writeNumberToDisplay('8');
}

function selectNine() {
  writeNumberToDisplay('9');
}

function selectDot() {
  writeSelectedButton('.');
  equationEntered += '.';
}

function selectPorcentage() {
  writeSelectedButton('%');
  equationEntered += '%';
}

function selectDivide() {
  writeSelectedButton('/');
  equationEntered += '/';
}

function selectMultiply() {
  writeSelectedButton('x');
  equationEntered += '*';
}

function selectMinus() {
  writeSelectedButton('-');
  equationEntered += '-';
}

function selectPlus() {
  writeSelectedButton('+');
  equationEntered += '+';
}

function selectClear() {
  clearDisplay();
  equationEntered = '';
}

function selectBackspace() {
  equationEntered = equationEntered.slice(0, -1);
  writeToCurrentCalculation(equationEntered);
}

function selectOpeningParenthesis() {
  writeSelectedButton('(');
}

function selectClosingParenthesis() {
  writeSelectedButton(')');
}

function writeNumberToDisplay(numberSelected) {
  if (digitsEntered > MAX_DIGITS - 1) {
    maxDigitsWarning();
  } else {
    writeSelectedButton(numberSelected);
    digitsEntered++;
    equationEntered += numberSelected;

    writeTemporaryOperationResult(eval(equationEntered));
  }
}

function operationSelected() {
  let regex = /\D/;
  let lastChar = equationEntered.slice(-1);

  return regex.test(lastChar);
}


// addEventListener parameter1 -> string that identifies the event we want to listen
//                  parameter2 -> function name, whithout parenthesis
zero.addEventListener('click', selectZero);
one.addEventListener('click', selectOne);
two.addEventListener('click', selectTwo);
three.addEventListener('click', selectThree);
four.addEventListener('click', selectFour);
five.addEventListener('click', selectFive);
six.addEventListener('click', selectSix);
seven.addEventListener('click', selectSeven);
eight.addEventListener('click', selectEight);
nine.addEventListener('click', selectNine);
dot.addEventListener('click', selectDot);

porcentage.addEventListener('click', selectPorcentage);
divide.addEventListener('click', selectDivide);
multiply.addEventListener('click', selectMultiply);
minus.addEventListener('click', selectMinus);
plus.addEventListener('click', selectPlus);

clear.addEventListener('click', selectClear);
backspace.addEventListener('click', selectBackspace);
openingParenthesis.addEventListener('click', selectOpeningParenthesis);
closingParenthesis.addEventListener('click', selectClosingParenthesis);

