function simpleMultiplication(n) {

  if (n % 2 === 0) {
    return n * 8;
  } else {
    return n * 9;
  }
}

console.log(simpleMultiplication(4));

// solution2

function simpleMultiplication(n) {
  if (n % 2 === 0) return n * 8;
  if ( n % 2 === 1) return n * 9;

}

console.log(simpleMultiplication(2));


// solution3


function simpleMultiplication(n) {
  return n % 2 === 0 ? n * 8 : n * 9;
}

console.log(simpleMultiplication(1));


// solution4

 function simpleMultiplication(n) {
   return n % 2 ? n * 9 : n * 8;
 }

 console.log(simpleMultiplication(1));

//  solution5

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

console.log(simpleMultiplication(2));