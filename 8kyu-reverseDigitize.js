// solution1

function reverseDigitize(n) {
  let result = [];
  let arr = n.toString().split('');

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(parseInt(arr[i]));
  }
  return result;
}

// console.log(reverseDigitize(1234));
// solution2

function reverseDigitize(n) {
  return n.toString().split('').map(Number).reverse();
}

// console.log(reverseDigitize(1234));
// solution3

function reverseDigitize(n) {
  return (n + ' ').split('').map(Number).reverse();
}

console.log(reverseDigitize(1234));