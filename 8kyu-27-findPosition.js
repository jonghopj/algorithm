function findPosition(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);

}

 console.log(findPosition('a'));

2

function findPosition(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return 'Position of alphabet: ${alphabet.indexOf(letter) + 1}' ;
}

 console.log('a');

 3

 function findPosition(letter) {
   const alphabet = '@abcdefghijklmnopqrstuvwxyz';
   return `Position of alphabet: ${alphabet.indexOf(letter)}`;
 }

 console.log(findPosition('a'));

4


function findPosition(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}
console.log(findPosition('a'));
