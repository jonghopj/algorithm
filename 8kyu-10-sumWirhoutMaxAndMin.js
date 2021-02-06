// solution1

function sumWithoutMaxAndMin(arr) {
  if (!arr || arr.length < 3) return 0;

  let result = 0;
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    result += arr[i];
  }
  return result - max - min;
}

// console.log(sumWithoutMaxAndMin([1, 2, 3]));

// solution2

function sumWithoutMaxAndMin(arr) {
  if (!arr || arr.length < 3) return 0;

  let result = 0;
  let max = min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? (max = arr[i]) : arr[i] < min ? (min = arr[i]) : arr[i];
    result += arr[i];
  }
  return result - max - min;
}

// console.log(sumWithoutMaxAndMin([2, 4, 1, 3]));


// solution3

function sumWithoutMaxAndMin(arr) {
  if (!arr || arr.length < 3) return 0;

  let sorted = arr.sort((a, b) => a - b);
  let result = 0;

  for (let i = 1; i < sorted.length - 1; i++) {
    result += sorted[i];
  }
  return result;
}


// console.log(sumWithoutMaxAndMin([1, 2, 3, 4]));

// solution4

function sumWithoutMaxAndMin(arr) {
  return arr ? arr.sort((a, b) => a - b).slice(1, -1).reduce((result, i) => result + i, 0) : 0;
}

console.log(sumWithoutMaxAndMin([1, 2, 3]));