// solution1

function findShort(str) {
  const arr = str.split(' ');
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr [i];
    }
  }
  return min.length;
}

// console.log(findShort('abcd e fgh'));

// solution2

function findShort(str) {
  return str.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

// console.log(findShort('How are you today?'));


// solution3

function findShort(str) {
  return Math.min(...str.split(' ').map(i => i.length));
}

// console.log(findShort('ab cde fghi'));