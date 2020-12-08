// function min(arr) {
//   let minimum = arr[0];

//   for (let i = 1; i<arr.length; i++) {
//     if (arr[i] < minimum) {
//       minimum = arr[i];
//     }
//   }

//   return minimum;
// }

// console.log(min([1, 2, 3, 4]));
// console.log(min([-2, -1, 0, 1]));


// solution 2

// function min(arr) {
//   return arr.sort((a,b) => a - b)[0];
// }
// console.log(min([1, 2, 3, 4, 5, 6]));

// solution 3 

// function min(arr) {
//   return arr.sort((a, b) => a - b).shift();
// }
// console.log(min([1, 2, 3, 4]));

// solution 4 

// function min(arr) {
//   return arr.sort((a, b) => b - a).pop();
// }

// console.log(min([1, 2, 3, 4]));

// solution 5 

// function min(arr) {
//   return Math.min.apply(null, arr);

// }

// console.log(min([1, 2, 3, 4]));

// solution 6 

function min(arr) {
  return Math.min(...arr);
}

console.log(min([1, 2, 3, 4]));