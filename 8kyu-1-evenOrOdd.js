// // solution1

// function evenOrOdd(n) {
//   if (n % 2 === 0)
//  {
//    return 'Even';
//  } else {
//    return 'Odd';
//  }
// }


// // solution2

// function evenOrOdd(n) {
//   return n % 2 === 0 ? 'Even' : 'Odd';
// }





// // solution3

// function evenOrOdd(n) {
//   return n % 2 ? 'Odd' : 'Even';
// }

// console.log(evenOrOdd(3));

// // solution4

// function evenOrOdd(n) {
//   return !(n % 2) ? 'Even' : 'Odd';
// }


// solution5

const evenOrOdd = n => n % 2 ? 'Odd' : 'Even';


console.log(evenOrOdd(3));