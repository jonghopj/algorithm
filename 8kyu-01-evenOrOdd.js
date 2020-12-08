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


console.log(evenOrOdd(0))  // Even
console.log(evenOrOdd(1))  // Odd
console.log(evenOrOdd(2))  // Even
console.log(evenOrOdd(3))  // Odd
console.log(evenOrOdd(4))  // Even