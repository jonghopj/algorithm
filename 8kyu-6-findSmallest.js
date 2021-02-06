// solution1

function findSmallest(arr) {
 let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// console.log(findSmallest([1, 2, 3, 4]));


// solution2

function findSmallest(arr) {
  arr.sort((a, b) => a - b);

  return arr[0];
}

// console.log(findSmallest([1, 2, 3, 4]));

// solution3

function findSmallest(arr) {
  return arr.sort((a, b) => a - b)[0];
}

// console.log(findSmallest([1, 2, 3, 4]));


// solution4

function findSmallest(arr) {
  return Math.min(...arr);


}

// console.log(findSmallest([1, 2, 3, 4]));

// solution5

function findSmallest(arr) {
  return Math.min.apply(null, arr);
}

console.log(findSmallest([1, 2, 3, 4]));

