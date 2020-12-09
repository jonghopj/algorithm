// function max(arr) {
//   let maximum = arr[0];
  
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maximum) {
//       maximum = arr[i];
//     }
//   }
  
//   return maximum;
// }

// console.log(max([1, 2, 3, 4]));

// solution2
// function max(arr) {
//   return arr.sort((a, b) => b - a)[0];
// }

// console.log(max([1, 2, 3, 4]));


// solution 3 


// function max(arr) {
//   return arr.sort((a, b) => b - a).shift();
// }

// console.log(max([1, 2, 3, 4]))

// solution 4

// function max(arr) {
//   return arr.sort((a, b) => a - b).pop();
// }

// console.log(max([1, 2, 3, 4]));


//  solution 5

function max(arr) {
  return Math.max.apply(null, arr);
}

console.log(max([1, 2, 3, 4]));