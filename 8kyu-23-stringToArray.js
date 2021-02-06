// solution1

function stringToArray(str) {
  const arr = str.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

// console.log(stringToArray('Hello World'));
// solution2
function stringToArray(str) {
  return str.split(' ');
}

console.log(stringToArray('Hello World'));