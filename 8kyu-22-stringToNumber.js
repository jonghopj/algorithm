// solution1

function stringToNumber(str) {
  return +str;
}

// console.log(typeof stringToNumber('1234'));

// solution2

function stringToNumber(str) {
  return Number(str);
}

// console.log(typeof stringToNumber('1234'));

// solution3
function stringToNumber(str) {
  return parseInt(str);
}

// console.log(typeof stringToNumber('1234'));

// solution4

function stringToNumber(str) {
  return str |0;
}

// console.log(typeof stringToNumber('1234'));