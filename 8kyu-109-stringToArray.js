// solution1

function stringToArray(str) {
   return str.split(' ');
}

console.log(stringToArray('abc'));

// solution2

function stringToArray(str) { 
  return str.split(/\s/);
}
console.log(stringToArray('abc'));