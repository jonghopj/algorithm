// solution1

function century(year) {
  return Math.ceil(year / 100);
}

// console.log(century(2000));
// solution2

function century(year) {
  let result = 0;

  for (let i = 0; i < year; i++) {
    if (i% 100 === 0) {
      result++;
    }
  }
  return result;
}

console.log(century(2001));