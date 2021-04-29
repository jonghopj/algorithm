
// soluton1


function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isDivisible(12, 1, 12));
// console.log(isDivisible(12, 2, 6));



// solution2

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

// console.log(isDivisible(12, 1, 12));



