function opposite(n) {
  return -n;
}
// console.log(opposite(2));


// solution2

function opposite(n) {
  return n * -1;
}

// console.log(opposite(-4));
// solution3

function opposite(n) {
  return n / -1;
}

// console.log(opposite(4));
// solution 4

function opposite(n) {
  return n > 0 ? -n : Math.abs(n);
}

console.log(opposite(5));
