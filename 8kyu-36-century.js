function century(year) {
  let result = 0;

  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
       result++;
    }
  }
   return result;
}

console.log(century(99));

function century(year) {
  if (year % 100 === 0) {
    return parseInt(year / 100);
  }else {
    return parseInt(year / 100) + 1;
  }
}

console.log(century(1));

function century(year) {
  if (year <= 100) return 1;
   let cen = parseInt(year / 100);

    return year % 100 === 0 ? cen : cen + 1;
}

console.log(century(99));

function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(99));