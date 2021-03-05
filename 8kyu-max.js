function max(arr) {
  let maxValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
// console.log(max([1, 2, 3, 4]));

// solution2

function max(arr) {
  return arr.sort((a, b) => b - a)[0];
}
// console.log(max([1, 2, 3, 4]));

// solution3

function max(arr) {
  return Math.max(...arr);
  

}
// console.log(max([1, 2, 3, 4]));

// solution4

function max(arr) {
  return arr.sort((a, b) => a - b).pop();
}
console.log(max([1, 2, 3, 4]));