// solution1

function replaceVowels(str) {
  const vowels = 'aeiouAEIOU';
  let result = ' ';

   for (let i = 0; i < str.length; i++) {
     if (vowels.indexOf(str[i]) === -1) {
       result += str[i];
     } else {
       result += '!';
     }
   }

   return result;
}
console.log(replaceVowels('aeiou'));

// solution2

function replaceVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '!');
}

console.log(replaceVowels('aeiou'));

// solution3

function replaceVowels(str) {
   return str.replace(/[aeiou]/gi, '!');
}
console.log(replaceVowels('aeiou'));
