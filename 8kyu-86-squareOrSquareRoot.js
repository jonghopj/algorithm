function squareOrSquareRoot(arr) {
  let result = [];

   for(let i = 0; i < arr.length; i++) {
     if (Math.sqrt(arr[i]) % 1 === 0) {
       result.push(Math.sqrt(arr[i]));
     } else {
       result.push(arr[i] * arr[i]);
     }

    }

    return result;
}


 console.log(squareOrSquareRoot([1, 2, 3, 4]));

//  solution2

function squareOrSquareRoot(arr) {
  let result = [];

   for (let i = 0; i < arr.length; i++) {
     if (Math.sqrt(arr[i]) === Math.floor(Math.sqrt(arr[i]))) {

     } else {
       result.push(arr[i] * arr[i]);
     }
   }

return result;
  }


  console.log(squareOrSquareRoot([1, 2, 3, 4]));




  // solution3


   function squareOrSquareRoot(arr) {

    return arr.map(i => Math.sqrt(i) % 1 === 0 ? Math.sqrt(i) : i * i);
   }

   console.log(squareOrSquareRoot([1, 2, 3, 4]));