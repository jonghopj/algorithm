function check(arr, x) {
  let result = false;

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === x) {
       return true;
     }
   }

   return result;
}

 console.log(check([1, 2, 3, 4], 4));


//  solution2

function check(arr, x) {

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === x) {
       return true;
     }
   }
   return false;
}

console.log(check([1, 2, 3, 4], 4));


// solution3


 function check(arr, x) {
   return arr.includes(x);
 }

  console.log(check([1, 2, 3, 4], 5) );