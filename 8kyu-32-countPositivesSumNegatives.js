function countPositivesSumNegatives(arr) {
  if (arr === null || arr.length === 0) return [];

  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
if (arr[i] > 0) count+=;
  if (arr[i] < 0) sum += arr[i];
  } 
  return [count,sum];
}
실패
console.log(countPositivesSumNegatives([1, 2, 3, 4, -11, -13]));



 function countPositivesSumNegatives(arr) {
   return arr && arr.length ? [arr.filter(i => i > 0).length, arr.filter(i => i < 0).reduce((sum, i) => sum + i, 0)] : [];
 }
 console.log(countPositivesSumNegatives([1, 2, 3, 4, -11]))