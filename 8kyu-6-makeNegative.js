// solution1

function makeNegative(n) {
  if (n > 0) {
    return -n;
  } else {
    return n;
  }
}
// console.log(makeNegative(1));

// solution2

function makeNegative(n) {
  return n > 0 ? -n : n;
}

// console.log(makeNegative(4));

// solution3

function makeNegative(n) {
  return -Math.abs(n);
}

// console.log(makeNegative(1));