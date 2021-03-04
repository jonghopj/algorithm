// solution1

function findAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;

}

// console.log(findAverage([1, 2, 3, 4, 5]));

// solution2

function findAverage(arr) {
  let sum = arr.reduce((result, i) => result + i, 0);
  return sum / arr.length;
}

console.log(findAverage(88, 92, 96, 100));

