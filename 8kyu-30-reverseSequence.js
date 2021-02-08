function reverseSequence(n) {
  let result = [];

  for ( let i = n; i > 0; i--) {
    result.push(i);

  }
  return result;
}
// console.log(reverseSequence(9));


// solution2

function reverseSequence(n) {
  return new Array(n).fill().map((_, index) => n - index);
}
// console.log(reverseSequence(20));

// solution3

function reverseSequence(n) {
  return new Array(n).fill().map((_, index) => n - index);
}
// console.log(reverseSequence(4));

// solution5

function reverseSequence(n) {
  if (n === 1) return [n];

  return [n].concat(reverseSequence(n - 1));

}

console.log(reverseSequence(4));