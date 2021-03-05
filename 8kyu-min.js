// solution1

function min(arr) {
  let minValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

// console.log(min([4, 3, 2, 1]));


// solution2



function min(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[0];
}

// console.log(min([4, 3, 2, 1]));


// solution3

function min(arr) {
  return arr.sort((a, b) => a - b)[0];
}

// console.log(min([4, 3, 2, 1]));

// solution4

function min(arr) {
  return arr.sort((a, b) => a - b).shift();


}
console.log(min([4, 3, 2, 1]));

// solution5

function min(arr) {
  return Math.min(...arr);
}
console.log(min([4, 2, 9, 4]));