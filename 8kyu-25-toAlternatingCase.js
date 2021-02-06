// solution1

function toAlternationgCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

// console.log(toAlternationgCase('Hello World'));

// solution2

function toAlternationgCase(str) {
  return str.split('').map(i => i.toUpperCase() ? i.toLowerCase() : i.toUpperCase ()).join('');
}

console.log(toAlternationgCase('Hello World'));