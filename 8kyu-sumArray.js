function sumArray(arr) {
  if ( arr === null || arr.length < 2) {
    return 0;
  }
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum - min - max;
}

// console.log(sumArray([1, 2, 3, 4]));

// solution2

function sumArray(arr) {
  if (!arr || arr.length < 2) {
    return 0;
  }
  arr = arr.sort((a,b) => a - b);
  let sum = 0;

  for (let i = 1; i < arr.lenggh- 1; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumArray([4]));
// soluion3

function sumArray(arr) {
  if (!arr || arr.length < 2) {
    return 0;
  }
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  arr.forEach(i => {
    sum += i;
    min > i ? min = i : max < i ? max = i: i;
  });
  return sum - max - min;
}

// console.log(sumArray([4, 2, 9, 4]));

// solution4

function sumArray(arr) {
  if (!arr || arr.length < 2) {
    return 0;
  } else {
    return arr.sort((a, b) => a - b).slice(1, -1).reduce((sum, i) => sum + i, 0)
  }
}

console.log(sumArray([1, 2, 3, 4]));