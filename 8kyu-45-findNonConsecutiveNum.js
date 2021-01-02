function findNonConsecutiveNum(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
     if (arr[i] + 1 !== arr[i +1]) {
       return arr[i + 1];
     }
   }

   return null;


}

 console.log(findNonConsecutiveNum([1, 2, 3, 4]));

function findNonConsecutiveNum(arr) {
  for (let i = 1; i < arr.length; i++) {
     let current = arr[i];
     let previous = arr[i - 1];

     if (current - previous > 1) {
       return current;
     }
  }
   return null;
}

console.log(findNonConsecutiveNum([1, 2, 3, 4]));



 function findNonConsecutiveNum(arr) {
    let result = arr.find((i, index) => i !== index + arr[0]);

     return Number.isInteger(result) ? result : null;
 }

 console.log(findNonConsecutiveNum([1, 2, 3, 4]));