// solution1

function countPositivesSumNegatives(arr){
  if ( arr === null || arr.length === 0) return [];

  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 ) count += arr[i];
    if (arr[i] >0) sum += arr[i];
  }
  return [count, sum];
}
// console.log(countPositivesSumNegatives([]));

// solution2

function countPositivesSumNegatives(arr) {
  if (!arr || !arr.length) return [];

  let count = 0;
  let sum = 0;

  arr.forEach(i => {
    if (i > 0) count ++;
    if (i < 0) sum += i;
  });
  return [count, sum];
}

// console.log(countPositivesSumNegatives([1, 2, 3, 4, -11, -13]));


// solution3

function countPositivesSumNegatives(arr) {
  return arr && arr.length ? [arr.filter(i => i > 0). length, arr.filter(i => i < 0).reduce((sum, i) => sum + i, 0)] : [];
}
console.log(countPositivesSumNegatives([0, 1, 2, -1, -2]));