// // solution1

// function sumTwoSmallest(str) {

//   let min0 = arr[0];
//   let min1 = arr[1];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min0) {
//       min1 = min0;
//       min0 = arr[i];

//     } else if (arr[i] < min1) {
//       min1 = arr[i];
//     }
//   }
//   return min0 + min1;
// }

// console.log(sumTwoSmallest([1, 2, 3, 4]));


// function sumTwoSmallest(str) {
//   arr = arr.sort((a, b) => a - b);
//   return arr[0] + arr[1];
// }

// console.log(sumTwoSmallest([1, 2, 3, 4]));

// solution3

functionn sumTwoSmallest(str) {
  const [a, b] = arr.sort((a, b) => a - b);
  return a + b;
}

console.log(sumTwoSmallest([1, 2, 3, 4]));