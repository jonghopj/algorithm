// solution1


function repeatStr(str, n) {
  let result = '';

  for (let i = 0; i < n; i ++) {
    result += str;
  }
  return result;
}

// console.log(repeatStr('abc', 4));

// solution2

function repeatStr(str, n) {
  let result = '';

  while (n > 0) {
    result += str;
    n--;
  }
  return result;
}

// console.log(repeatStr('a', 4));
// function repeatStr(str, n) {
//   str.repeat(n);
// }
// console.log(repeatStr('a', 3));   안됨