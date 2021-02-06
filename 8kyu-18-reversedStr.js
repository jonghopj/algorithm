// solution1

// function reversedStr(str) {
//   let result = '';

//   for (let i = str.length - 1; i >=0;  i--) {
//  result += str[i];
//   }
// return result;

// }

// console.log(reversedStr('Hello'));       does not working!!!!!!

// solution2

// solution2

function reversedStr(str) {
  return str.split('').reverse().join('');
  
}

// console.log(reversedStr('World'));

// solution3

function reversedStr(str) {
  return [...str].reverse().join('');
}

// console.log(reversedStr('Hello'));


// solution4

function reversedStr(str) {
  return str.length > 0 ? reversedStr(str.substring(1)) + str.charAt(0) : '';
}

console.log(reversedStr('Hello World'));