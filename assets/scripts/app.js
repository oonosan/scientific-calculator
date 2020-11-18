function selectOne() {
  writeSelectedButton('1');
}

function selectZero() {
  writeSelectedButton('0');
}

function selectTwo() {
  writeSelectedButton('2');
}

function selectThree() {
  writeSelectedButton('3');
}

function selectFour() {
  writeSelectedButton('4');
}

function selectFive() {
  writeSelectedButton('5');
}

function selectSix() {
  writeSelectedButton('6');
}

function selectSeven() {
  writeSelectedButton('7');
}

function selectEight() {
  writeSelectedButton('8');
}

function selectNine() {
  writeSelectedButton('9');
}

function selectDot() {
  writeSelectedButton('.');
}

function selectPorcentage() {
  writeSelectedButton('%');
}

function selectDivide() {
  writeSelectedButton('/');
}

function selectMultiply() {
  writeSelectedButton('x');
}

function selectMinus() {
  writeSelectedButton('-');
}

function selectPlus() {
  writeSelectedButton('+');
}

function selectClear() {
  clearOutput();
}

function selectParenthesis() {
  //Parenthesis
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
parenthesis.addEventListener('click', selectParenthesis);

