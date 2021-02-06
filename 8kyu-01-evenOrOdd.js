// Solution 01
function evenOrOdd(n) {
  if (n % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Solution 02
function evenOrOdd(n) {
  return n % 2 ? 'Odd' : 'Even';
}

console.log(evenOrOdd(0));
