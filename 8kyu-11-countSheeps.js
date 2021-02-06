// solution1

function countSheeps(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result++;
    }
  }
  return result;
}

// console.log(countSheeps([true, false, false, true]));

// solution2

function countSheeps(arr) {
  let result = 0;

  arr.forEach(sheep => {
    if (sheep) {
      result++;
    }
  });
  return result;
}

// console.log(countSheeps([true, false, false, true]));

function countSheeps(arr) {
  let result = 0;

  arr.map(sheep => {
    if (sheep) {
      result++;
    }
  });
  return result;
}

// console.log(countSheeps([true, false, false, true]));

// solution4

function countSheeps(arr) {
  return arr.reduce((result, i) => result + (i === true ? 1 : 0), 0);
}

// console.log(countSheeps([true, false, false, true]));

// solution5

function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
console.log(countSheeps([true, false, false, false, false]));
