// solution1

function summation(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(summation(4));

// solution2
function summation(n) {
  return (1 +n) * (n / 2);
}

// console.log(summation(10));

// solution3

function summation(n) {
  return ((1 + n) * n) / 2;
}
// console.log(summation(100));

// solution4

function summation(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n + summation(n -1);
  }
}

console.log(summation(10));