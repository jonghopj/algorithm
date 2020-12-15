function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position' + i;
    }
  }
}

console.log(findNeedle([1, 2, 'needle', 4]));

solution2

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

console.log(findNeedle([1, 2, 'needle', 4]));



function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
console.log(findNeedle([1, 2, 'needle', 4]));