function checkThreeAndTwo(arr) {
  let countA = 0;
  let countB = 0;
  let countC = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') countA++;
    if (arr[i] === 'b') countA++;
    if (arr[i] === 'c') countA++;
  }
  return (countA === 3 || countB === 3 || countC === 3) && (countA === 2 || countB === 2 || countC === 2);
}

console.log(checkThreeAndTwo([]));

// solution2

function checkThreeAndTwo(arr) {
  let countA = arr.filter(i => i === 'a').length;
  let countB = arr.filter(i => i === 'b').length;
  let countC = arr.filter(i => i === 'c').length;
  
  return (countA === 3 || countB === 3 || countC === 3) && (countA === 2 || countB === 2 || countC === 2);
}

console.log(checkThreeAndTwo([]));


// solution3

function checkThreeAndTwo(arr) {
  let result = [(a = 0), (b = 0), (c = 0)];

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === 'a') result[0]++;
     if (arr[i] === 'b') result[1]++;
     if (arr[i] === 'c') result[2]++;
   }

    return result.includes(3) && result.includes(2);
}

console.log(checkThreeAndTwo([]));