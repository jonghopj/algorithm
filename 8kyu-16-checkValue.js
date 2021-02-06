function checkValue(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}


// console.log(checkValue([1, 2, 3, 4], 5));

// solution2

function checkValue(arr, val) {
  return arr.indexOf(val) !== -1 ? true : false;
}

// console.log(checkValue([1, 2, 3, 4], 5));


// solution3

function checkValue(arr, val) {
  return arr.includes(val);
}

console.log(checkValue([1, 2, 3, 4], 4));