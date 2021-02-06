// this kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


function simpleMultiplication(n) {
  if (n % 2 === 0) {
    return n * 8;
  } else {
    return n * 9;
  }
}
console.log(simpleMultiplication(1));



// SOLUTION2



function simpleMultiplication(n) {
  if (n % 2 === 0) return n * 8;
  if (n % 2 === 1) return n * 9;
}

console.log(simpleMultiplication(1));


// solution3

 function simpleMultiplication(n) {
    return n % 2 === 0 ? m * 8 : n * 9;
 }

 console.log(simpleMultiplication(1));


//  sonution4

 function simpleMultiplication(n) {
    return n % 2 ? n * 9 : n * 8;
 }
 console.log(simpleMultiplication(1));

//  solution5


 function simpleMultiplication(n) {
   return n * (n % 2 ? 9 : 8);
 }

 console.log(simpleMultiplication(1));