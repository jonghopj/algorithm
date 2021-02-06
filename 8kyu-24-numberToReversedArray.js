// solution1
function numberToReversedArray(n) {
  let str = n.toString();
  let result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(Number(str[i]));
  }
  return result;
}
// console.log(numberToReversedArray(1234));

// solution2

function numberToReversedArray(n) {
  return n.toString().split('').reverse().map(i => +i);
}

// console.log(numberToReversedArray(1234));

// solution3

function numberToReversedArray(n) {
  return n.toString().split('').reverse().map(Number);
}

console.log(numberToReversedArray(1234));