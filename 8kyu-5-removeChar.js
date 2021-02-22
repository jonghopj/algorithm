// solutin1
function removeChar(str) {
  let result = '';

  for (let i = 1; i < str.length - 1; i ++) {
    result += str[i];
  }
  return result;
}

// console.log(removeChar('abc'));

// solution2

function removeChar(str) {
  str = str.split('');
  str.shift();
  str.pop();

  return str.join('');
}

// console.log(removeChar('abc'));

// solution3

function removeChar(str) {
  return str.slice(1, -1);
}
// console.log(removeChar('abcd'));
// solution4

function remove(str) {
  return str.suvstring(1, str.length -1);
}
// console.log(removeChar('abcd'));