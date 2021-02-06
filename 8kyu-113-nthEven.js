// solution1

function nthEven(n) {

  let result = 0;

  for (let i = 0; i < n; i++) {
    result += 2;
  }
  return result;
}

console.log(nthEven(6));

// solution2


function nthEven(n) {
  return n * 2 - 2;
}

console.log(nthEven(4));

