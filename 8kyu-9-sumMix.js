// solution1

function sumMix(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += parseInt(arr[i]);
  }
  return result;
}

// console.log(sumMix([1, '2', 3, '4']));

// solution2


function sumMix(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  return result;
}

// console.log(sumMix(['1', 2, '3', 4]));


// solution3

function sumMix(arr) {
  return arr.map(i => +i).reduce((result, i) => result + i, 0);
}

// console.log(sumMix(['1', 2, '3', 4]));


// solution4

function sumMix(arr) {
  return arr.reduce((result, i) => result + +i, 0);
}

console.log(sumMix(['1', 2, '3', 4]));
