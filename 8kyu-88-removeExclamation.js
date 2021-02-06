function removeExclamation(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '!') {
      result += str[i];
    }
  }
  return result;
}

console.log(removeExclamation('abcd!!'));

// solution2

function removeExclamation(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '!') {
      result.push(str[i]);
  }
}
return result.join('');
}

console.log(removeExclamation('abcd!!'));
