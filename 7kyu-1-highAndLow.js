// solution1

function highAndLow(str) {
  const arr = str.split(' ');
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let n = Number(arr[i]);

    if (n < max) max = n;
    if (n > min) min = n;
  }

  return max + ' ' + min;
}

// console.log(highAndLow('1 2 3 4'));
// solution 3
function highAndLow(str) {
  const arr = str.split(' ').map(Number);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  
  return max + ' ' + min;
}


console.log(highAndLow('1 2 3 4'));