// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  return 0;
}

// Subtract small value from larger one
function subtract() {
  if (b > a) {
    return b - a;
  }
  return a - b;
}

function multiply() {
  return a * b;
}

// Divide larger value by small
function divide() {
  if (b > a) {
    return b / a;
  }
  return a / b;
}

// Increase value of a by 1
function increment() {
  return a++;
}

// Decrease value of b by 1
function decrement() {
  return b--;
}

// Divide larger value by small to find the reminder
function reminder() {
  if (b > a) {
    return b % a;
  }
  return a % b;
}
