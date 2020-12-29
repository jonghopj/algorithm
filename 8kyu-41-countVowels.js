// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//    for (let i = 0; i < str.length; i++) {
//      for (let j = 0; j < vowels.length; j++) {
//        if (str[i] === vowels[j]) {
//          count++;
//        }
//      }
//    }

//     return count;
// }

// console.log(countVowels('codewars'));

// function countVowels(str) {
//   const vowels = 'aeiou';
//   let count = 0;

//    for (let i = 0; i < str.length; i++) {
//      if (vowels.indexOf(str[i]) !== -1) {
//        count++;
//      }
//    }

//     return count;
// }

//  console.log(countVowels('codewars'));






//  function countVowels(str) {
//   return str.split('').filter(i => 'aeiou'.includes(i)).length;
// }
// console.log(countVowels('codewars'));



// function countVowels(str) {
//   return str.replace(/[^aeiou]/g, '').length;
// }
// console.log(countVowels('codewars'));

function countVowels(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

console.log(countVowels('codewars'));