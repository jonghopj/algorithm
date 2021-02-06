function correctError(str) {
  let result = '';

   for (let i = 0; i < str.length; i++) {
     if (str[i] === '0') {
       result += 'O';
     } else if (str[i] === '1') {
       result += 'I';
     } else if (str[i] === '5') {
       result += 'S';
     } else {
       result += str[i];
     }
   }
   return result;
}

console.log(correctError('PAR15'));


// solution2   LNDN<<<< result.

function correctError(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      result.push === ('O');
    } else if (str[i] === '1') {
      result.push('I');
    } else if (str[i] === '5') {
      result.push('S'); 
    } else {
      result.push(str[i]);
    }

  }
 return result. join('');
}


console.log(correctError('L0ND0N'));

// solution3

 function correctError(str) {
   return str.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
 }

 console.log(correctError('C0DEWAR5'));