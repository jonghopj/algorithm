// solution

function countVowels(str) {
  const dwdw = ['a', 'e', 'i', 'o', 'u'];
  var qwqw = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < dwdw.length; j++) {
      if (str[i] === dwdw[j]) {
        qwqw ++;
      }
    }
  }
  return qwqw;
}

// console.log(countVowels('codewars'));

// solution2

function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count ++;
    }
  }
  return count;
}
// console.log(countVowels('park jongho'));
// solution3

function countVowels(str) {
  return str.split('').filter(i => 'aeiou'.includes(i)).length;
}

// console.log(countVowels('jongho park'));


// solution4

function countVowels(str) {
  return str.replace(/[^aeiou]/g,'').length;
}

// console.log(countVowels('codewars'));

// solution5

function countVowels(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

// console.log(countVowels('codewars'));