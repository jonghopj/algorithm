// solution1

// function findAverage(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum / arr.length;
// }

// console.log(findAverage([1, 2, 3, 4]));

// solution2


function findAverage(arr) {
  return arr.reduce((sum, i) => sum + i, 0) / arr.length;

  
}

console.log(findAverage(2, 2, 2, 2));