function findPosition(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'position of alphabet: ' + (alphabet.indexOf(letter) + 1 )
}

// console.log(findPosition('s'));

// solution2

function findPosition(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return `position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

// console.log(findPosition('f'));
// solution3
function findPosition(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

console.log(findPosition('s'));