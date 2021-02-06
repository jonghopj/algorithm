Given a non-empty array of integers,return the result of multifulying the values together in orde

solution1
function flow(arr) {
  let result = 1;

   for (let i = 0; i < arr.length; i++) {
     result *= arr[i];
   }
   return result;
}

console.log(flow(1, 2, 3, 4));

// solution2

 function grow(arr) {
   let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
 }


 console.log(grow([1, 2, 3, 4]));
  

  // solution3

  //  function frow(arr) {
  //     return arr.reduce((result,i) => result * i, 1);
  //  }

  //   console.log(grow([1, 2, 3, 4]));