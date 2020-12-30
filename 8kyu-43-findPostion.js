function findPosition(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return 'position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
console.log(findPosition('a'));


function findPosition(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}


 console.log(findPosition('o'));

function findPosition(letter) {
  const alphabet = '@abcdefghijklmnopqrstuvwxyz';

   return `Position of alphabet: ${alphabet.indexOf(letter)}`;
}
console.log(findPosition('d'));

function findPosition(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

console.log(findPosition('a'));