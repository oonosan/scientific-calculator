function selectOne() {
  writeNumber('1');
}

function selectZero() {
  writeNumber('0');
}

function selectTwo() {
  writeNumber('2');
}

function selectThree() {
  writeNumber('3');
}

function selectFour() {
  writeNumber('4');
}

function selectFive() {
  writeNumber('5');
}

function selectSix() {
  writeNumber('6');
}

function selectSeven() {
  writeNumber('7');
}

function selectEight() {
  writeNumber('8');
}

function selectNine() {
  writeNumber('9');
}

function selectDot() {
  writeNumber('.');
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
