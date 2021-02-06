function noEndingZeros(n) {
  while (n !== 0 && n % 10 === 0) {
    n /= 10;
  }
  return n;
}

console.log(noEndingZeros(0));


// solution2


function noEndingZeros(n) {
  return Number(n.toString().replace(/0+$/g, ''));
}

console.log(noEndingZeros(19880));

// solution3

function noEndingZeros(n) {
  return +`${n}`.replace(/0+$/g,'');
}
console.log(noEndingZeros(19880));