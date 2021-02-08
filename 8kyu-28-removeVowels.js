// create a function to remove all the lowercase vowels in a given string.

//  sonution1

// function removeVowels(str) {
//   const vowels= 'aeiou';
//   let result = '' ;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) === -1) {
//       result =+ str[i];
//     }
//   }
//   return result;
// }

// console.log(removeVowels('hello world'));

// solution2

function removeVowels(str) {
  const vowels = 'aeiou';

  return str.split('').filter(i => {
    return vowels.indexOf(i) === -1;
  }).join('');
}

console.log(removeVowels('Hello world'));