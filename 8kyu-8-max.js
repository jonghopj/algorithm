// solution1
function max(arr) {
  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}
// console.log(max([3, 1, 4, 2]));

// soluton2

function max(arr) {
  return arr.sort((a, b) => b - a)[0];
}

// console.log(max([3, 1, 4, 2]));

// solution3

function max(arr) {
  return arr.sort((a, b) => b - a). shift();
}
// console.log(max([1, 2, 3, 4]));

// solution4

function max(arr) {
  return arr.sort((a, b) => a - b).pop();
}

// console.log(max([3, 1, 4, 2]));

// solution5

function max(arr) {
  return Math.max.apply(null, arr);
}
// console.log(max([1, 2, 3, 4]));

// solution6

function max(arr) {
  return Math.max(...arr);
}
console.log(max([1, 2, 3, 4]));