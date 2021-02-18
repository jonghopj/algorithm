// solution1

function removeVowels(str) {
  const vowels = 'aeiouAEIOU';
  var result = '';

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}

// console.log(removeVowels('Hello World'));

// solution2

function removeVowels(str){
  const vowels = ['a', 'e', 'e', 'o', 'u'];

  return str.split('').filter(i => {
    return vowels.indexOf(i.toLowerCase()) === -1;
  }).join('');
}
console.log(removeVowels('Hello World'));

// solution3

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g,'');
}

console.log(removeVowels('Hello World'));