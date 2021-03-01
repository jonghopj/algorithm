function countPositivesSumNegatives(arr) {
  if (arr === null || arr.length === 0) {
    return [];
  }
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    } else {
      sum += arr[i];
    }
  }
  return [count, sum];
}

// console.log(countPositivesSumNegatives([-2, -1, 0, 1, 2]));

// colution2

function countPositivesSumNegatives(arr) {
  if (!arr || !arr.length) {
    return [];
  }
  let count = 0;
  let sum = 0;

  arr.forEach(i => {
    if (i > 0) {
      count++;
    } else {
      sum += i;
    }
  });
  return [count, sum];
}

// console.log(countPositivesSumNegatives([-2, -1, 0, 1, 2]));


// solution3

function countPositivesSumNegatives(arr) {
  if (!arr || !arr.length) {
    return [];
  }

  return arr.reduce((result, i) => {
    if (i > 0) {
      result[0]++;
    } else {
      result[1] += i;
    } return result;
  }, [0, 0]);
}

console.log(countPositivesSumNegatives([-2, -1, 0, 1, 2]));