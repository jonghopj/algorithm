function howMuchILoveYou(nPetals) {
  const phrases = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly'
  ];

  return phrases[nPetals % phrases.length];
}

console.log(howMuchILoveYou(1));


// solution2


 function howMuchILoveYou(nPetals) {
   const phrases = {
     0: 'not at all',
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly'
   };

   return phrases[nPetals % 6];
 }


 console.log(howMuchILoveYou(1));