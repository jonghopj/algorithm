// solution1

 function replaceVowels(str) {
   const vowels = 'aeiouAEIOU';
   let result = '';

    for (let i = 0; i < str.length; i++) {
      if  (vowels.indexOf(str[i]) === -1) {
        result += str[i];
      } else {
        result += '!';
      }
    }
    return result;
 }

 console.log(replaceVowels('abcde'));


// solution2


function replaceVowels(str) {
   return str.replace(/[aeiouAEIOU]/g, '!');
}

 console.log(replaceVowels('apple'));