function getMiddle(str) {
  const middle = Math.floor(str.length / 2);

  if (str.length % 2 !== 0) {
    return str.slice(middle, middle +1);
  } else {
    return str.slice(middle - 1, middle +1);
  }
}

// console.log(getMiddle('a'));


// solution2

function getMiddle(str) {
  const middle = Math.ceil(str.length / 2 - 1);

  return str.substr(middle, str.length % 2 !== 0 ? 1 : 2);
}

console.log(getMiddle('odd'));
