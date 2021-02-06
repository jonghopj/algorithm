// // Write a program that finds the summation of every number from 1 to n


// // solution1

function summation(n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

// console.log(summation(3));
// // solution2

function summation(n) {
  return (n * (n + 1)) /2;
}

// console.log(summation(3));

// solution3

function summation(n) {
  return n ? n + summation(n - 1) : 0;
}

console.log(summation(3));

// solution4

function summation(n) {
  return [...Array(n)].reduce((result, i, index) => result + index + 1, 0);
}

console.log(summation(4));