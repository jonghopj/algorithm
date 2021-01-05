function correctErrors(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') result += 'O';
    else if (str[i] === '1') result += 'I';
    else if (str[i] === '5') result += 'S';
    else result += str[i];
  }
  
  return result;
}

console.log(correctErrors('L0ND0N'));

function correctErrors(str) {
  return str.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
}

console.log(correctErrors('L0ND0N'));




function correctErrors(str) {
  const obj = {
    0: 'O',
    1: 'I',
    5: 'S'
  };
  
  return str.replace(/[015]/g, i => obj[i]);
}

console.log(correctErrors('L0ND0N'));