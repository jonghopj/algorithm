// solution1

function sumPositive(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

console.log(sumPositive([1, 2, 3, 4, 5]));


// solution2

function sumPositive(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) result += arr[i];
  }
  return result;
}

console.log(sumPositive([1, 2, 3, 4, 5]));


// solution3


function sumPositive(arr) {
  let result = 0;

  arr.forEach((i, index, arr) =>{
    if (i > 0) {
      result += i;
    }
  });
  return result;
}

console.log(sumPositive([]));

// solution5


function sumPositive(arr) {
  return arr.filter(i => i > 0).reduce((result, i) => result + i, 0);
}

console.log(sumPositive([0]));