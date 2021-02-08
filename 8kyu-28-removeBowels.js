// solution1

function removeVowels(str) {
  const vowels = 'aeiou';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      result += str[i]
    }
  }
  return result;
}

// console.log(removeVowels('aeiou11'));

// solution2

function removeVowels( str) {
  const vowels = 'aeiou';

  return str.split('').filter(i => {
    return vowels.indexOf(i) === -1;
  }).join('');
}

// console.log(removeVowels('AEIOU'));


// solution3

function removeVowels(str) {
  return str.replace(/[aeiou]/g, '');

}

console.log(removeVowels('AEIOU'));
