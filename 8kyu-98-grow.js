// solution1

 function grow(arr) {
   let result = 1;

   for (let i = 0; i < arr.length; i++) {
     result *= arr[i];
   }

   return result;
 }

 console.log(grow([1, 2, 3, 4]));

//  solution2


function grow(arr) {
  let result = arr[0];

   for (let i = 1; i < arr.length; i++) {
     result *= arr[i];
   }
   return result;
}

console.log(grow([1, 2, 3, 4]));

// solution 3 


function grow(arr) {
  return arr.reduce((result, i) => result * i, 1);
}

console.log(grow([1, 2, 3, 4]));