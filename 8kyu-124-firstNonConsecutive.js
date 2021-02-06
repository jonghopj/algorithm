// solution1


function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) return arr[i];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4]));


// solution2

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4])); 