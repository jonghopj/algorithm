function repeatStr(n, str) {
  let result = '';

  for (let i = 0; i < n; i ++) {
    result += str;
  }

  return result;
}

// console.log(repeatStr(2, '*'));

// solution2

function repeatStr(n, str) {
  let result = '';

  while (n > 0) {
    result += str;
    n --;
  }

   return result;
}

// console.log(repeatStr(0, '*'));


// solution3


 function repeatStr(n,str) {
   return str.repeat(n);

   
 }
//  console.log(repeatStr(0, '*'));

// solution4

function repeatStr(n, str) {
  return Array(n + 1). join(str);
}

// console.log(repeatStr(n, str));
// solution5

function repeatStr(n,str) {
  return new Array(n + 1).join(str);
}

// console.log(repeatStr(4, '*'));