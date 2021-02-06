// // solution1



function getAverage(arr){
let sum = 0;

for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
return Math.floor(sum / arr.length);
}

console.log(getAverage([1, 2, 3, 4]));
console.log(getAverage([2, 3, 4, 5]));



// solution2


function getAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return parseInt(sum / arr.length);
}

console.log(getAverage([1, 2, 3, 4]));


 function getAverage(arr) {
    let sum = arr.reduce((result, i) => result + i, 0);
    return Math. floor(sum / arr.length);
 }

 console.log(getAverage([1, 2, 3, 4]));

//  solution4


function getAverage(arr) {
  let sum = 0;

   arr.forEach(i => {
      sum += i;
   });
   return Math.floor(sum / arr.length);
}

console.log(getAverage([1, 2, 3, 4]));