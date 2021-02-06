function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;

   for (let i = 0; i < arr1.length; i++) {
     sum1 += arr1[i];
   }

   for (let i = 0; i < arr2.length; i++) {
     sum2 += arr2[i];
   }
   return sum1 + sum2;
}

 console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

 solution2

 function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((result, i) => result + i, 0);
 }

 console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

solution3
 function arrayPlusArray(arr1, arr2) {
   let arr = [...arr1, ...arr2];

   return arr. reduce((result, i) => result + i, 0);


  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));