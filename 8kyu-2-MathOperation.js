// solution1

function mathOperation(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
}

// console.log(mathOperation('+', 4, 4));

// solution2

function mathOperation(operation, value1, value2){
  switch (operation) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
  }
}
// console.log(mathOperation('+', 4, 4));


// solution3

function mathOperation(operation, value1, value2) {
  let obj = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return obj[operation];
}

// console.log(mathOperation('*', 4, 5));

// solution4

function mathOperation(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(mathOperation('+', 4, 4));