// solution1

function arrayPlusArray(arr1, arr2) {
  let result1 = 0;
  let result2 = 0;


  for (let i = 0; i < arr1.length; i++){
    result1 += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    result2 += arr2[i];
  }
  return result1 + result2;
}

console.log(arrayPlusArray([1, 2], [3, 4]));

// solution2

function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let result = 0;

for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
return result;
}
console.log(arrayPlusArray([1, 2],[3, 4]));

// solution3

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((result, i) => result + i, 0);
}

console.log(arrayPlusArray([1, 2], [3, 4]));