// your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals



 

// phrases
// 1 I love you

// 2 a little

// 3a lot

// 4 passionately

// 5 madly

//  6 not at all

// solution1

 function howMuchILoveYou(nPetals) {

   const phrases = [
     'not ar all',
     'I love you',
     'a little',
     'a lot',
     'passionately',
     'madly'
   ];

    return phrases[nPetals % phrases.length];
 }

  console.log(howMuchILoveYou(2));


//  solution2

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

console.log(howMuchILoveYou(0));


