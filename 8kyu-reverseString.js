// solution1

function reverseString(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// console.log(reverseString('abcd'));

// solution2

function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.log(reverseString('abc'));


//solution3

function reverseString(str) {
  return [...str].reverse().join('');
}

console.log(reverseString('abc'));
