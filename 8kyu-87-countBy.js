function countBy(x, n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }
  return result;
}

console.log(countBy(1, 4));


// solution2

 function countBy(x, n) {
   let result = [x];
    
   for (let i = 2; i <= n; i++) {
     if (x === 1) {
       result.push(i);
     } else {
       result.push(i * x);
     }
   }
   return result;
 }


 console.log(countBy(1, 4));